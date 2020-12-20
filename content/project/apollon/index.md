---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "apollon"
summary: "Classifying issues before you do."
authors: ["admin"]
tags: ["typescript", "aws", "lambda", "serverless", "License:MIT"]
categories: ["project", "rust", "aws"]
date: 2020-08-31
published: false

# Optional external URL for project (replaces project detail page).
#external_link: "https://github.com/replicadse/apollon"

---
## Sketch

Apollon is a project for classifying tickets in a ticket system into categories (like type, component, labels) before you do it.\
Please find this project on [GitHub](https://github.com/replicadse/apollon).\
The assumption for this to work is that the ticket contains all the necessary information in title and description. Apollon classifies various dates including components, labels, type and priority.

## Current state

Currently, only the crawler for training, test and validation data is working. It crawls tickets from GitHub and saves them into AWS S3 buckets (using the AWS ecosystem).
