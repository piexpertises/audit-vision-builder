# Configuration EmailJS pour le Formulaire de Contact

## Vue d'ensemble
Le formulaire de contact de Pi Expertises est configuré pour envoyer des emails via EmailJS, un service gratuit et fiable qui ne nécessite pas de backend.

## État actuel du formulaire
✅ **VALIDÉ** - Le formulaire est entièrement fonctionnel avec :
- Validation côté client (HTML5 + attributs ARIA)
- Gestion des erreurs avec messages d'état
- Indicateur de chargement pendant l'envoi
- Messages de succès/erreur multilingues (HE/EN/FR)
- Accessibilité complète (ARIA, focus, contraste)

## Configuration requise

### Étape 1: Créer un compte EmailJS
1. Visitez [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Le plan gratuit permet 200 emails/mois (suffisant pour démarrer)

### Étape 2: Créer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Sélectionnez votre fournisseur (Gmail recommandé pour débuter)
4. Suivez les instructions pour connecter votre compte Gmail
5. **Notez le Service ID** (ex: `service_pi_expertises`)

### Étape 3: Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template HTML :

```html
Nouveau message de {{from_name}}

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Langue: {{language}}
Page: {{page}}

Message:
{{message}}

---
Envoyé depuis le site Pi Expertises
```

4. **Notez le Template ID** (ex: `template_contact_form`)

### Étape 4: Obtenir votre clé publique
1. Allez dans "Account" → "General"
2. Copiez votre **Public Key** (anciennement User ID)

### Étape 5: Configurer le code
Dans `src/components/ContactSection.tsx`, remplacez les valeurs suivantes (lignes 25-27) :

```typescript
const serviceId = 'service_pi_expertises'; // Remplacez par votre Service ID
const templateId = 'template_contact_form'; // Remplacez par votre Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Remplacez par votre Public Key
```

## Structure des données envoyées

Le formulaire envoie les champs suivants :

```javascript
{
  from_name: string,      // Nom du contact (2-100 caractères)
  from_email: string,     // Email (format valide, max 255 caractères)
  from_phone: string,     // Téléphone (9-20 caractères)
  message: string,        // Message (10-1000 caractères)
  to_email: 'pi.expertises@gmail.com',
  language: 'he' | 'en' | 'fr',  // Langue de l'utilisateur
  page: 'Contact Form'    // Page d'origine
}
```

## Variables d'environnement (optionnel mais recommandé)

Pour plus de sécurité en production, vous pouvez stocker les clés dans des variables d'environnement :

1. Créez un fichier `.env` à la racine du projet :
```env
VITE_EMAILJS_SERVICE_ID=service_pi_expertises
VITE_EMAILJS_TEMPLATE_ID=template_contact_form
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Modifiez `ContactSection.tsx` :
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Ajoutez `.env` à `.gitignore` (déjà fait normalement)

## Test de soumission

Pour tester le formulaire :

1. Remplissez tous les champs requis
2. Cliquez sur "שלח" / "Send" / "Envoyer"
3. Vérifiez :
   - Indicateur de chargement s'affiche
   - Message de succès apparaît (toast + notification)
   - Email reçu dans la boîte de réception configurée
   - Formulaire se vide après succès

## Messages d'erreur

Le formulaire gère plusieurs scénarios d'erreur :

| Erreur | Message (HE) | Message (EN) | Message (FR) |
|--------|--------------|--------------|--------------|
| Envoi échoué | שגיאה בשליחת הטופס | Error sending form | Erreur lors de l'envoi |
| Réseau | אנא נסה שוב | Please try again | Veuillez réessayer |
| Validation | מלא את כל השדות | Fill all fields | Remplissez tous les champs |

## Sécurité

✅ **Implémenté** :
- Validation HTML5 (required, minLength, maxLength)
- Sanitization des entrées
- Limite de caractères stricte (1000 pour le message)
- Protection contre les doubles soumissions
- HTTPS obligatoire en production

⚠️ **Recommandations supplémentaires** :
- Ajouter reCAPTCHA v3 pour anti-spam (optionnel)
- Implémenter un rate limiting (limiter à 5 soumissions/heure par IP)

## Monitoring et analytics

Pour suivre les soumissions :
1. Dashboard EmailJS montre toutes les tentatives d'envoi
2. Logs accessibles dans "History"
3. Statistiques de délivrabilité disponibles

## Dépannage

### Problème : "Failed to send email"
- Vérifiez que les IDs (service, template, public key) sont corrects
- Assurez-vous que le service email est actif dans EmailJS
- Vérifiez la connexion internet

### Problème : Email non reçu
- Vérifiez les spams
- Assurez-vous que l'email `to_email` est correct dans le template
- Vérifiez les limites du plan gratuit (200/mois)

### Problème : CORS error
- EmailJS gère automatiquement CORS, pas de configuration nécessaire
- Si erreur persiste, vérifiez que vous utilisez HTTPS en production

## Contact support

Pour toute question sur EmailJS :
- Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com

---

**Date de configuration**: 2025-09-30
**Version**: 1.0
**Dernière mise à jour**: Contact form avec validation complète et multilingual support
