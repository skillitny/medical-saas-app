# MediCare Pro - Application SaaS Médicale

Une application web moderne de gestion médicale avec interface multi-rôles, développée avec React, TypeScript et Tailwind CSS.

## 🎯 Fonctionnalités principales

### Interface multi-rôles
- **Super Admin** : Gestion globale des sociétés et statistiques
- **Admin** : CRM complet, affectation des leads, gestion des RDV
- **Secrétaire** : Prise de RDV, gestion clients, planning
- **Commercial** : Pipeline des leads, historique des RDV
- **Pro Santé** : Agenda personnel, fiches patients, visioconférence
- **Patient** : Espace personnel, RDV, documents médicaux

### Fonctionnalités clés
- 🏥 Gestion multi-sociétés (Super Admin)
- 👥 CRM intégré avec affectation intelligente des leads
- 📅 Système de planning et RDV avancé
- 💬 Messagerie interne sécurisée
- 📹 Module de visioconférence intégré
- 📄 Gestion des documents médicaux
- 🔔 Système de notifications en temps réel
- 📊 Tableaux de bord personnalisés par rôle

## 🛠️ Technologies utilisées

- **Frontend** : React 18 + TypeScript
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **Routing** : React Router DOM
- **Build** : Vite
- **Dev** : ESLint + Hot Reload

## 🚀 Installation et démarrage

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd frontend

# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build pour la production
npm run build
```

## 🔐 Comptes de démonstration

| Rôle | Email | Mot de passe | Accès |
|------|-------|--------------|-------|
| Super Admin | superadmin@demo.com | demo | Gestion globale |
| Admin | admin@demo.com | demo | CRM + Leads |
| Secrétaire | secretary@demo.com | demo | RDV + Clients |
| Commercial | commercial@demo.com | demo | Pipeline |
| Pro Santé | doctor@demo.com | demo | Agenda + Patients |
| Patient | patient@demo.com | demo | Espace personnel |

## 📁 Structure du projet

```
frontend/
├── src/
│   ├── components/
│   │   ├── Layout/          # Header, Sidebar, Layout principal
│   │   ├── UI/              # Composants réutilisables
│   │   └── Appointments/    # Composants spécifiques aux RDV
│   ├── pages/
│   │   ├── Auth/           # Authentification
│   │   └── Dashboard/      # Tableaux de bord par rôle
│   ├── contexts/           # Context React (Auth)
│   ├── types/              # Types TypeScript
│   └── App.tsx            # Composant principal
├── public/                 # Assets statiques
├── package.json           # Dépendances
└── README.md             # Documentation
```

## 🎨 Design System

### Palette de couleurs
- **Primaire** : Bleu médical (#2563EB)
- **Secondaire** : Vert santé (#059669)
- **Accent** : Orange (#EA580C)
- **États** : Success, Warning, Error

### Composants UI
- **Button** : 5 variantes (primary, secondary, outline, ghost, danger)
- **Card** : Conteneur principal avec ombres subtiles
- **Badge** : États et statuts colorés
- **Table** : Tableaux responsives avec tri
- **Input** : Champs de formulaire avec validation
- **AppointmentCard** : Carte RDV avec actions

## 🔧 Fonctionnalités avancées

### Système de permissions
- Navigation contextuelle selon le rôle
- Accès restreint aux fonctionnalités sensibles
- Interface adaptée aux besoins métier

### Responsive Design
- **Mobile** : Interface optimisée pour patients
- **Tablette** : Accès complet aux fonctionnalités
- **Desktop** : Vue complète pour professionnels

### Composants modulaires
- Architecture en composants réutilisables
- Séparation claire des responsabilités
- Types TypeScript pour la sécurité

## 📱 Captures d'écran

### Dashboard Super Admin
- Vue globale des sociétés
- Statistiques multi-comptes
- Gestion centralisée

### Dashboard Admin
- CRM intégré
- Module d'affectation des leads
- Suivi des performances

### Espace Patient
- Prochains RDV
- Documents médicaux
- Facturation et historique

## 🚀 Déploiement

L'application est prête pour le déploiement sur :
- Netlify
- Vercel
- Services d'hébergement classiques

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers statiques
```

## 🔮 Évolutions futures

- [ ] Module de facturation avancé
- [ ] Intégration calendriers externes
- [ ] API REST complète
- [ ] Notifications push
- [ ] Module de télémédecine étendu
- [ ] Rapports et analytics avancés
- [ ] Intégration systèmes hospitaliers

## 📝 Notes techniques

- Interface 100% responsive
- Code TypeScript strict
- Composants découplés et testables
- Performance optimisée
- SEO ready
- Accessibilité WCAG

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**MediCare Pro** - Une solution complète pour la gestion médicale moderne 🏥

## 📧 Contact

Pour toute question ou support, contactez l'équipe de développement.