# Backend API - Medical SaaS App

## Stack technique
- Python 3.11
- FastAPI
- PostgreSQL
- Authentification JWT
- Gestion multi-rôles : SuperAdmin, Admin, Secrétaire, Commercial, Pro Santé, Patient
- Gestion multi-sociétés
- API RESTful sécurisée
- Déploiement Replit + URL publique auto

## Structure initiale
- /app : code FastAPI
- /app/models : modèles SQLAlchemy
- /app/routes : endpoints API
- /app/core : sécurité, config, dépendances
- /app/schemas : Pydantic schemas
- /app/main.py : point d'entrée de l'API
