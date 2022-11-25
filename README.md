## Skeet Worker API Boilerplate
Express, TypeScript, Google Cloud Run


## What's Skeet?

TypeScript Serverless Framework 'Skeet'. 

The Skeet project was launched with the goal of reducing software development, operation, and maintenance costs. 

Build Serverless Apps faster.
Powered by TypeScript GraphQL, Prisma, Jest, Prettier, and Google Cloud. 


## Dependency

- [Google SDK](https://cloud.google.com/sdk/docs)
- [Docker](https://www.docker.com/)


## Enable Google Cloud API

```bash
$ gcloud config set project PROJECT_ID
$ gcloud services enable run.googleapis.com
$ gcloud services enable containerregistry.googleapis.com
```


## Edit package.json config

This is an example config. 
Please replace values with your setting.


`package.json`
```json
"config": {
  "project_id": "skeet-framework",
  "app_name": "skeet-worker",
  "docker_image": "skeet-worker:latest",
  "image_url": "eu.gcr.io/skeet-framework/skeet-worker:latest",
  "region": "europe-west4",
  "cpu": "1",
  "memory": "1Gi"
}
```

## Usage


### Run local
```bash
$ yarn
$ yarn dev
```


### Test

```bash
$ yarn test
```


### Build & Run
```bash
$ yarn build
$ yarn start
```


### Deploy to Google Cloud Run
```bash
$ yarn deploy
```


### Discord Webhook Message
Set your Discord Webhook Url in `.env` 

```bash
$ cp .env.sample .env

```