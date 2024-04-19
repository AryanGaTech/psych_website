from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app)

def machinelearning(form_data):
    symptoms = form_data.get('selectedSymptoms', " ") #dictionary

    symptomDesc = form_data.get('symptomDescription', " ") #dictionary

    symptomString = "" #make a string with list of symptoms and desc

    for symptom in symptoms:
        symptomString += symptom
        symptomString += ", "

    for i, word in enumerate(symptomDesc.split()):
        #split into words and add those to the string list too
        symptomString += word
        if i != len(symptomDesc.split()) - 1:
            symptomString += ", " #add comma unless last one
    
    #now put symptomstring into top5

    topFivePos = topFive(symptomString)
    
    return topFivePos


    
# output_filename = 'description_dataframe.xlsx'
# df.to_excel(output_filename, sheet_name='Sheet1', index=False) # Set index=False to exclude the index column

# Extract high-value words from the description -> return strings
def extract_keywords(description):
    #doc = nlp(description)
    #keywords = [token.text for token in doc if not token.is_punct and not token.is_stop]
    return description.split(", ")

def keywordSimilarity(input, keywords):
    df = pd.DataFrame(
    [('Schizophrenia Spectrum and Other Psychotic Disorders', "hallucinations, delusions, psychosis, disorganized speech, social withdrawal, catatonia"),
     ('Bipolar I Disorder',"impulsive, instability, mood swings, disassociation, psychosis, manic and hypomanic episodes"),
     ('Depressive Disorders',"excessive sadness, social withdrawal, hopelessness, insomnia, suicidal, loneliness"),
     ('Anxiety Disorders',"excessive stress, fear, restlessness, insomnia, fatigue, panic"),
     ('Obsessive-Compulsive and Related Disorders',"obsession, repeated behaviors, excessive stress, tics, intrusive thoughts, fear"),
     ('Trauma- and Stressor-Related Disorders',"excessive stress, avoidance behavior, repeated flashbacks, irritable, insomnia, loneliness"),
     ('Dissociative Disorders', "social disruption, disassociation, amnesia, excessive stress, suicidal, derealization"),
     ('Gender Dysphoria', "gender confusion, identity confusion, sexual confusion, excessive stress, suicidal, loneliness"),
     ('Substance-Related and Addictive Disorders', "drug abuse, reward-seeking, addiction, social withdrawal, impulsive, cravings"),
     ('Personality Disorders', "excessive stress, paranoia, impulsive, loneliness, identity confusion, unpredictable behavior")],
    columns =['Mental Illness','Keywords'])

    df['keywords'] = df['Keywords'].apply(extract_keywords)

    sim = 0
    if len(input) == 0:
        return sim
    i = 0
    k = 0
    while i < len(input) and k < len(keywords):
        inputCur = input[i]
        keywordCur = keywords[k]
        if inputCur in keywords:
            sim = sim + 1
        elif keywordCur in input:
            sim = sim + 1
        i = i + 1
        k = k + 1
    return sim / 6

#check for all descriptions
def keywordRanking(input_text):
    df = pd.DataFrame(
    [('Schizophrenia Spectrum and Other Psychotic Disorders', "hallucinations, delusions, psychosis, disorganized speech, social withdrawal, catatonia"),
     ('Bipolar I Disorder',"impulsive, instability, mood swings, disassociation, psychosis, manic and hypomanic episodes"),
     ('Depressive Disorders',"excessive sadness, social withdrawal, hopelessness, insomnia, suicidal, loneliness"),
     ('Anxiety Disorders',"excessive stress, fear, restlessness, insomnia, fatigue, panic"),
     ('Obsessive-Compulsive and Related Disorders',"obsession, repeated behaviors, excessive stress, tics, intrusive thoughts, fear"),
     ('Trauma- and Stressor-Related Disorders',"excessive stress, avoidance behavior, repeated flashbacks, irritable, insomnia, loneliness"),
     ('Dissociative Disorders', "social disruption, disassociation, amnesia, excessive stress, suicidal, derealization"),
     ('Gender Dysphoria', "gender confusion, identity confusion, sexual confusion, excessive stress, suicidal, loneliness"),
     ('Substance-Related and Addictive Disorders', "drug abuse, reward-seeking, addiction, social withdrawal, impulsive, cravings"),
     ('Personality Disorders', "excessive stress, paranoia, impulsive, loneliness, identity confusion, unpredictable behavior")],
    columns =['Mental Illness','Keywords'])

    r = [[0] * 2]
    input = extract_keywords(input_text)
    for index, row in df.iterrows():
        s = keywordSimilarity(input, row['Keywords'])

        r.append([row['Mental Illness'], s])
    r = sorted(r, key=lambda x: x[1], reverse = True)
    r = [rank for rank in r if r[1] != 0]
    return r

def topFive(input_text):
    #spacyList = spacyRanking(input_text)
    keywordsList = keywordRanking(input_text)
    top = [[0] * 2]
    for i in range(0,4):
        if keywordsList[i][1] != 0:
            top.append(keywordsList[i])

    #top = sorted(top, key=lambda x: x[1], reverse = True)
    top.remove([0,0])
    return top

# Dummy data to simulate server processing
processed_data= {}

# Routes
@app.route("/test")
def test():
    return {"test": ["test1","test2","test3"]}

@app.route("/submit", methods=["POST"]) 
def formSubmit():
    global processed_data
    form_data = request.get_json()

    # Process the form data 
    # input form data -> process (run through ML model) -> processed data (output of ML model)
    # Right now there is no processing, just returning the data

    userInfo = []

    name = form_data.get('firstName', "N/A") + " " + form_data.get('middleInitial', " ") + form_data.get('lastName', "N/A")
    age = form_data.get('age', "N/A")
    education = form_data.get('education', "N/A")
    ethnicity = form_data.get('ethnicity', "N/A")
    veteranStatus = form_data.get('vetStatus', "N/A")
    substanceUse = form_data.get('history', "N/A")
    substanceDescription = form_data.get('substanceUseDescription', "N/A")

    userInfo.append(name)
    userInfo.append(age)
    userInfo.append(education)
    userInfo.append(ethnicity)
    userInfo.append(veteranStatus)
    userInfo.append(substanceUse)
    userInfo.append(substanceDescription)

    diagnosis = machinelearning(form_data) #return this now

    processed_data['diagnosis'] = diagnosis
    processed_data['userInfo'] = userInfo

    response_data = {'diagnosis': diagnosis, 'userInfo': userInfo}

    return jsonify(response_data), 201

@app.route("/results")
def getResults():
    # Fetch results from wherever they are stored: processed_data global
    # Return results as JSON response
    print(jsonify(processed_data))
    return jsonify(processed_data)

@app.route("/processed_data")
def getProcessedData():
    return jsonify(processed_data)


if __name__ == "__main__":
    app.run(port=8000, debug=True)
