import type { Metadata } from "next";
import P from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Datenschutz | tinybrickboy",
  description: "Datenschutzerklärung von tinybrickboy gemäß DSGVO.",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>
      <p className="lead">Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.</p>

      <div className="notice">
        <strong>Hinweis:</strong> Felder mit <P>[ECKIGEN KLAMMERN]</P> bitte vor dem Veröffentlichen mit deinen
        echten Daten ersetzen.
      </div>

      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        <P>[VOLLSTÄNDIGER NAME]</P>
        <br />
        <P>[STRASSE UND HAUSNUMMER]</P>
        <br />
        <P>[PLZ ORT]</P>
        <br />
        Deutschland
        <br />
        E-Mail: <a href="mailto:hello@tinybrickboy.de">hello@tinybrickboy.de</a>
      </p>

      <h2>2. Allgemeines</h2>
      <p>
        Diese Website wird als rein informatives Online-Angebot betrieben. Es gibt <strong>keine Registrierung</strong>,{" "}
        <strong>kein Kontaktformular</strong>, <strong>keine Cookies</strong> und{" "}
        <strong>keine Analyse- oder Tracking-Tools</strong>.
      </p>
      <p>
        Beim Aufruf der Website werden allerdings durch den Hosting-Anbieter (siehe Punkt 3) automatisch technische
        Daten verarbeitet.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei <P>[HOSTING-ANBIETER, ANSCHRIFT]</P> gehostet. Die Server stehen in{" "}
        <P>[LAND, z. B. Deutschland]</P>.
      </p>
      <p>
        Beim Aufruf der Website verarbeitet der Hosting-Anbieter automatisch sogenannte Server-Logfiles, die dein
        Browser übermittelt. Dazu gehören insbesondere:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Übertragene Datenmenge</li>
        <li>Meldung über erfolgreichen Abruf</li>
        <li>Browsertyp und -version</li>
        <li>Betriebssystem</li>
        <li>Referrer-URL</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien
        Bereitstellung der Website).
      </p>

      <h2>4. Keine externen Ressourcen</h2>
      <p>
        Schriftarten, Icons und Bilder werden <strong>ausschließlich von diesem Server</strong> ausgeliefert. Es
        werden keine Inhalte von Drittanbietern (z. B. Font-CDNs, Bilddienste oder externe APIs) nachgeladen. Beim
        Aufruf der Website wird deine IP-Adresse daher an keine weiteren Dienste übertragen.
      </p>

      <h2>5. Lokale Speicherung (localStorage)</h2>
      <p>
        Diese Website speichert deine Theme-Auswahl (hell/dunkel) lokal in deinem Browser über{" "}
        <code>localStorage</code>. Es werden dabei <strong>keine personenbezogenen Daten</strong> gespeichert, sondern
        lediglich der Wert <code>&quot;light&quot;</code> oder <code>&quot;dark&quot;</code>. Diese Information verlässt
        deinen Browser nicht. Du kannst sie jederzeit über die Entwickler-Werkzeuge oder die Browser-Einstellungen
        löschen.
      </p>

      <h2>6. Externe Links</h2>
      <p>
        Diese Website enthält Links zu externen Seiten (z. B. onthepixel.net, fastasfuck.net, GitHub, Instagram,
        Discord, AbuseIPDB). Erst beim Klick auf einen solchen Link verlässt du diese Website. Auf die
        Datenverarbeitung der verlinkten Seiten habe ich keinen Einfluss; es gelten die jeweiligen
        Datenschutzerklärungen der Anbieter.
      </p>

      <h2>7. Deine Rechte</h2>
      <p>Dir stehen nach DSGVO folgende Rechte zu:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht gegen Verarbeitungen, die auf berechtigtem Interesse beruhen (Art. 21 DSGVO)</li>
        <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung dieser Rechte genügt eine formlose E-Mail an{" "}
        <a href="mailto:hello@tinybrickboy.de">hello@tinybrickboy.de</a>.
      </p>

      <h2>8. Aktualität dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung kann angepasst werden, wenn sich die rechtlichen oder technischen
        Rahmenbedingungen ändern. Die jeweils aktuelle Fassung ist über diese Seite abrufbar.
      </p>
      <p>
        <em>Stand: {new Date().getFullYear()}</em>
      </p>
    </>
  );
}
