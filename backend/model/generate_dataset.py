from sklearn.model_selection import train_test_split

# from transformers import DistilBertTokenizerFast
import csv

train_texts = []
train_labels = []

with open("./je.csv", newline="\n") as csvfile:
    spamreader = csv.reader(csvfile, delimiter=",")
    for row in spamreader:
        train_texts.append(row[1])
        train_labels.append(row[0])

train_texts, val_texts, train_labels, val_labels = train_test_split(
    train_texts, train_labels, test_size=0.2
)
# tokenizer = DistilBertTokenizerFast.from_pretrained('distilbert-base-uncased')
