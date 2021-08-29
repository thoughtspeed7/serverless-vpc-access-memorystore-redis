#! /bin/bash
GCP_REGION=us-central1 #replace us-central1 with your gcp region

gcloud functions deploy hello-redis \
--allow-unauthenticated \
--entry-point main \
--region $GCP_REGION \
--runtime nodejs14 \
--trigger-http \
--vpc-connector hello-redis-vpc-connector
