import type { Metadata } from "next";
import P from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Impressum | tinybrickboy",
  description: "Impressum von tinybrickboy gemäß § 5 TMG.",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <>
      <h1>Impressum</h1>
      <p className="lead">Angaben gemäß § 5 TMG (Telemediengesetz).</p>

      <div className="notice">
        <strong>Hinweis:</strong> Die mit <P>[ECKIGEN KLAMMERN]</P> markierten Felder müssen durch deine echten
        Daten ersetzt werden, bevor die Seite öffentlich live geht.
      </div>

      <h2>Diensteanbieter</h2>
      <p>
        <P>[VOLLSTÄNDIGER NAME]</P>
        <br />
        <P>[STRASSE UND HAUSNUMMER]</P>
        <br />
        <P>[PLZ ORT]</P>
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:hello@tinybrickboy.de">hello@tinybrickboy.de</a>
        <br />
        Telefon: <P>[OPTIONAL: TELEFONNUMMER]</P>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <P>[VOLLSTÄNDIGER NAME]</P>
        <br />
        <P>[STRASSE UND HAUSNUMMER]</P>
        <br />
        <P>[PLZ ORT]</P>
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Meine E-Mail-Adresse findest du oben.
      </p>
      <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
        eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese
        Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
        kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
        Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
        zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet.
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
      </p>
    </>
  );
}
