#! /bin/bash
GCP_PROJECT_ID=rajchaudhary #replace rajchaudhary with your gcp project id
GCP_REGION=us-central1 #replace us-central1 with your gcp region

gcloud builds submit \
--tag gcr.io/$GCP_PROJECT_ID/hello-redis

gcloud run deploy hello-redis \
--allow-unauthenticated \
--image gcr.io/$GCP_PROJECT_ID/hello-redis \
--platform managed \
--region $GCP_REGION \
--vpc-connector hello-redis-vpc-connector
