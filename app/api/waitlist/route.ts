 
// Ce fichier est une API route Next.js
// URL: https://ton-site.com/api/waitlist

import { NextResponse } from 'next/server';

// Pour stocker les emails (en mémoire, temporaire)
let waitlistEmails: string[] = [];

export async function POST(request: Request) {
  try {
    // 1. Récupère l'email du corps de la requête
    const body = await request.json();
    const email = body.email;

    console.log('📧 Email reçu:', email);

    // 2. Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // 3. Éviter les doublons
    if (!waitlistEmails.includes(email)) {
      waitlistEmails.push(email);
      console.log('✅ Email ajouté. Total:', waitlistEmails.length);
    } else {
      console.log('ℹ️ Email déjà dans la liste');
    }

    // 4. ICI TU POURRAS AJOUTER PLUS TARD :
    // - Sauvegarder dans une base de données (Supabase)
    // - Envoyer un email de bienvenue
    // - Ajouter à un Google Sheet
    // - Envoyer une notification Slack/Discord

    // 5. Réponse succès
    return NextResponse.json(
      { 
        success: true, 
        message: 'Merci ! Vous êtes sur la liste d\'attente.',
        count: waitlistEmails.length
      },
      { status: 200 }
    );

  } catch (error) {
    // En cas d'erreur
    console.error('❌ Erreur API waitlist:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// GET pour voir les inscrits (utile pour debug)
export async function GET() {
  return NextResponse.json(
    { 
      success: true,
      count: waitlistEmails.length,
      emails: waitlistEmails 
    },
    { status: 200 }
  );
}