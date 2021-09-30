#!/bin/sh

kubectl apply -f .kube/proxima-db-ns.yaml
kubectl apply -f .kube/proxima-db-persistent-volume.yaml
kubectl apply -f .kube/proxima-db-persistance-volume-claim.yaml
kubectl apply -f .kube/proxima-db.yaml 
# kubectl apply -f .kube/proxima-db-ingress-test.yaml