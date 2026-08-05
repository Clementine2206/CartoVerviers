// Création de la carte
const map = L.map('map').setView([50.5900, 5.8600], 11);


// Fond OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Services à afficher
const services = [
    {
    nom: "Service de Santé Mentale de Verviers",
    categorie: "Partenaire réseau",
    lat: 50.587344,
    lng: 5.856185,
    adresse: "Rue de Dinant 20-22, 4800 Verviers",
    contact: "Directeur Mr Thierry Gérard",
    telephone: "087 22 16 45",
    email: "info@ssmverviers.be",
    environnement: "Oui",
    personnesConfiance: "Oui",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 8h à 18h",
    prochaineEtape: "Contacter la direction. Convention à formaliser dans le cadre des accords RéSME"

    },

    {
    nom: "Bureaux RéSME",
    categorie: "Partenaire réseau",
    lat: 50.587242,
    lng: 5.856603,
    adresse: "Rue de Dinant 11, 4800 Verviers",
    contact: "Coordinatrice Mme Martine Haas et Chargé de projet PUP Mr Maxime Paupinet",
    telephone: "087 30 04 87",
    email: "info@resme.be",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "Non",
    horaires: "À établir",
    prochaineEtape: "Définir le protocole d'activation interne"
},

{
    nom: "Bureaux EMUT RéSME",
    categorie: "Partenaire réseau",
    lat: 50.582487,
    lng: 5.834556,
    adresse: "Rue Jean Koch 3, 4800 Lambermont",
    contact: "Infirmière en chef Mme Audrey Pottier",
    telephone: "087 10 70 04",
    email: "audrey.pottier@fralex.be",
    environnement: "Oui",
    personnesConfiance: "Oui",
    transports: "À vérifier",
    infrastructures: "Oui",
    pmr: "Oui",
    horaires: "À établir",
    prochaineEtape: "Recueillir position de l'institution. Définir le protocole d'activation interne"
},

{
    nom: "CPAS de Herve (Pôle social)",
    categorie: "Action sociale",
    lat: 50.643392,
    lng: 5.801693,
    adresse: "Rue de Herve 163, 4650 Herve",
    contact: "Assistantes sociales Mme Françoise Jason et Mme Nadège Gérard",
    telephone: "087 47 99 00",
    email: "social@cpas-herve.be",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 9h à 12h et de 13h30 à 16h. Fermé le mardi après-midi",
    prochaineEtape: "Rencontre avec la direction et visite des locaux pour identifier l'espace le plus adapté"
},

{
    nom: "CPAS de Welkenraedt",
    categorie: "Action sociale",
    lat: 50.659922,
    lng: 5.958452,
    adresse: "Rue Saint-Paul 63, 4840 Welkenraedt",
    contact: "Directrice Mme Françoise Rademaker",
    telephone: "087 32 41 30",
    email: "info@cpas-welkenraedt.be",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "Non",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 8h30 à 16h30 avec une pause de 12h à 13h30, service social accessible sur rendez-vous",
    prochaineEtape: "Les contacter avec AMO Latitude J pour évaluer la faisabilité d'interventions conjointes"
},

{
    nom: "CPAS d'Aubel",
    categorie: "Action sociale",
    lat: 50.706290,
    lng: 5.858427,
    adresse: "Place Albert Ier 8, 4880 Aubel",
    contact: "Directrice Mme Catherine Scherer",
    telephone: "087/30.62.80",
    email: "cpas@aubel.be",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "À vérifier",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 8h à 16h. Les assistantes sociales reçoivent sur rendez-vous. Permanences les mardis et jeudis de 9h à 11h.",
    prochaineEtape: "Contacter pour présenter le projet et visiter les locaux"
},

{
    nom: "CPAS de Plombières",
    categorie: "Action sociale",
    lat: 50.732638,
    lng: 5.967341,
    adresse: "Place du 3ème Millénaire 1-2, 4850 Plombières",
    contact: "Directeur Mr Luc Hagelstein",
    telephone: "087 78 91 42",
    email: "cpas@plombieres.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "À vérifier",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 9h à 12h ou sur rendez-vous",
    prochaineEtape: "Rencontre tripartite avec AMO Latitude J et RéSME pour explorer une convention commune"
},

{
    nom: "AMO Latitude J",
    categorie: "Jeunesse",
    lat: 50.648702,
    lng: 5.820571,
    adresse: "Rue du Centre 32, 4651 Herve (Siège social) et Place Communale 7, 4850 Montzen (Antenne Montzen)",
    contact: "Directeur Mr Loïs Voigt",
    telephone: "087 35 09 61",
    email: "info@amo-latitudej.be",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "À vérifier",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Lundi : 09h00-17h00 ; Mardi : 09h00-17h00 ; Mercredi : 09h00-18h00 ; Jeudi : 09h00-17h00 ; Vendredi : 09h00-19h00 ; Minimum un samedi par mois : 08h30-16h30 ; Dimanche : fermé",
    prochaineEtape: "Prendre contact avec la direction et visiter les locaux"
},

{
    nom: "AMO Le Cap",
    categorie: "Jeunesse",
    lat: 50.594908,
    lng: 5.851486,
    adresse: "Rue des Messieurs 10, 4800 Verviers",
    contact: "Directeur Mr François Desart",
    telephone: "087 33 33 88",
    email: "cap.amoverviers@gmail.com",
    environnement: "À vérifier",
    personnesConfiance: "Oui",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: `
Lundi : 13h30 – 18h00
Mardi : 09h30 – 12h30
Mercredi : 13h30 – 18h00
Jeudi : 13h30 – 18h00
    `,
    prochaineEtape: "Contacter la direction et cartographier la répartition territoriale avec Latitude J"
},

{
    nom: "Plan de Cohésion Sociale de Pepinster",
    categorie: "Action sociale",
    lat: 50.562529,
    lng: 5.801017,
    adresse: "Rue la Nô 51, 4860 Pepinster",
    contact: "Chef de projet Mr Christophe Debaty",
    telephone: "0495 29 82 77",
    email: "c.debaty@pepinster.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "Oui",
    horaires: "Du lundi au vendredi de 9h à 16h",
    prochaineEtape: "Vérifier l'existence d'un espace disponible et séparé du flux habituel. Disponibilité hors heures ouvrables à négocier."
},

{
    nom: "CPAS de Thimister-Clermont",
    categorie: "Action sociale",
    lat: 50.658426,
    lng: 5.855101,
    adresse: "Croix Henri-Jacques 3, 4890 Thimister-Clermont",
    contact: "Directeur Mr Philippe Stassen",
    telephone: "087 30 65 80",
    email: "info.cpas@thimister-clermont.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "Oui",
    horaires: "Permanences les lundis et jeudis de 8h30 à 12h. Sur rendez-vous : mardi, mercredi et vendredi de 8h30 à 12h et de 13h30 à 16h",
    prochaineEtape: "Contacter la direction du CPAS et vérifier l'existence d'un espace adéquat et disponible"
},

{
    nom: "Régie des quartiers de Dison Havre-Sac ASBL",
    categorie: "Action sociale",
    lat: 50.607162,
    lng: 5.858985,
    adresse: "Rue d'Andrimont 52, 4820 Dison",
    contact: "Coordinatrice Mme Vanessa Natalello",
    telephone: "087 35 46 60",
    email: "neufmoulin@skynet.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Du lundi au vendredi de 8h30 à 16h",
    prochaineEtape: "Contact avec la coordination et vérifier l’existence d’un espace adéquat et disponible préservé du flux habituel"
},

{
    nom: "CPAS d'Olne",
    categorie: "Action sociale",
    lat: 50.591214,
    lng: 5.750216,
    adresse: "Rue du Village 89, 4877 Olne",
    contact: "Directrice Mme Marianne Busin",
    telephone: "087 26 78 89",
    email: "cpas@olne.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "À vérifier",
    horaires: "Lundi, mardi, jeudi et vendredi de 9h à 11h. Fermé le mercredi",
    prochaineEtape: "Contact avec la direction et vérifier l’existence d’un espace adéquat et disponible préservé du flux habituel. Disponibilité hors heures ouvrables à négocier"
},

{
    nom: "CPAS du Limbourg",
    categorie: "Action sociale",
    lat: 50.620097,
    lng: 5.940744,
    adresse: "Rue Oscar Thimus 1, 4830 Limbourg",
    contact: "Directrice Mme Pauline Rombach",
    telephone: "087 32 13 50",
    email: "pauline.rombach@cpas-limbourg.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "Oui",
    pmr: "Oui",
    horaires: "Du lundi au vendredi de 8h30 à 16h00 uniquement sur rendez-vous",
    prochaineEtape: "Contacter la direction et vérifier l’existence d’un espace adéquat et disponible préservé du flux habituel"
},

{
    nom: "CPAS de Baelen",
    categorie: "Action sociale",
    lat: 50.630167,
    lng: 5.971751,
    adresse: "Rue de la Régence 6, 4837 Baelen",
    contact: "Directrice Mme Sylvie Lahaye",
    telephone: "087 76 01 13",
    email: "info@cpasbaelen.be",
    environnement: "À vérifier",
    personnesConfiance: "À vérifier",
    transports: "Oui",
    infrastructures: "À vérifier",
    pmr: "À vérifier",
    horaires: "Permanences les lundis, mercredis et vendredis de 8h30 à 11h30, service social accessible sur rendez-vous",
    prochaineEtape: "Contacter la direction et vérifier l'existence d'un espace adéquat et disponible. Voir si une synergie est possible avec un autre service au sud de la commune. Disponibilité hors heures ouvrables à négocier."
},

];    



// Chargement des communes
fetch("data/communes.geojson")

    .then(response => response.json())

    .then(data => {

const zonePoliceHerve = [
    "Aubel",
    "Baelen",
    "Herve",
    "Limbourg",
    "Olne",
    "Plombières",
    "Thimister-Clermont",
    "Welkenraedt"
];

L.geoJSON(data, {

    interactive: false,

style: function(feature) {

    let nomCommune = feature.properties.mun_name_fr[0];

    if (zonePoliceHerve.includes(nomCommune)) {
        return {
            color: "#2E7D32",
            weight: 2,
            fillColor: "#66BB6A",
            fillOpacity: 0.45
        };
    }

    return {
        color: "#0066cc",
        weight: 2,
        fillColor: "#66b3ff",
        fillOpacity: 0.2
    };
},

    onEachFeature: function(feature, layer) {

        let nomCommune = feature.properties.mun_name_fr[0];

        layer.bindTooltip(nomCommune, {
            permanent: true,
            direction: "center",
            className: "nom-commune"
        });

    }

}).addTo(map);

// Légende
const legende = L.control({ position: "bottomright" });

legende.onAdd = function () {

    const div = L.DomUtil.create("div", "info legend");

    div.innerHTML = `
        <h4>Légende</h4>

        <div><span style="
            display:inline-block;
            width:18px;
            height:18px;
            background:#66BB6A;
            border:1px solid #2E7D32;
            margin-right:8px;">
        </span>Zone de Police de Herve</div>

        <div style="margin-top:6px;">
            <span style="
                display:inline-block;
                width:18px;
                height:18px;
                background:#66b3ff;
                border:1px solid #0066cc;
                margin-right:8px;">
            </span>Autres communes
        </div>
    `;

    return div;
};

legende.addTo(map);

        // Ajout des services après les communes
        services.forEach(service => {

            L.marker([service.lat, service.lng])

                .addTo(map)

                .bindTooltip(service.nom, {
                    direction: "top"
                })

.bindPopup(`
    <h3>${service.nom}</h3>

    <b>Catégorie :</b><br>
    ${service.categorie}<br><br>

    <b>Adresse :</b><br>
    ${service.adresse}<br><br>

    <b>Contact :</b><br>
    ${service.contact}<br><br>

    <b>Téléphone :</b><br>
    ${service.telephone}<br><br>

    <b>Email :</b><br>
    ${service.email}<br><br>

    <b>Environnement peu stimulant :</b>
    ${service.environnement}<br><br>

    <b>Présence de personnes de confiance :</b>
    ${service.personnesConfiance}<br><br>

    <b>Accessibilité (transports urbains) :</b>
    ${service.transports}<br><br>

    <b>Infrastructures de base disponibles :</b>
    ${service.infrastructures}<br><br>

    <b>Accès PMR :</b>
    ${service.pmr}<br><br>

    <b>Horaires :</b><br>
    ${service.horaires}<br><br>

    <b>Prochaine étape :</b><br>
    ${service.prochaineEtape}
`)

// Marqueur antenne Latitude J Montzen
L.marker([50.706705, 5.961617])
    .addTo(map)
    .bindTooltip("Antenne Latitude J Montzen", {
        direction: "top"
    });

        });
        // Outil temporaire pour récupérer des coordonnées
map.on('click', function(e) {

    console.log("Latitude :", e.latlng.lat);
    console.log("Longitude :", e.latlng.lng);

    L.popup()
        .setLatLng(e.latlng)
        .setContent(
            "Latitude : " + e.latlng.lat.toFixed(6) +
            "<br>Longitude : " + e.latlng.lng.toFixed(6)
        )
        .openOn(map);

});

    })

    .catch(error => {
        console.error(
            "Erreur lors du chargement du GeoJSON :",
            error
        );
    });
  
map.on('click', function(e) {

    L.popup()
        .setLatLng(e.latlng)
        .setContent(
            "Latitude : " + e.latlng.lat.toFixed(6) +
            "<br>Longitude : " + e.latlng.lng.toFixed(6)
        )
        .openOn(map);

});