export default function Suggestedprofiles({ sugestionsbox }) {
    return (
      <>
        {" "}
        <div className="sugestionsbox">
          <div className="suggestionsforyou">Sugestões para você</div>
          <div className="seeall">Ver tudo</div>
        </div>
        <div className="optionsbox">
          {sugestionsbox.map((sugestion) => (
            <div key={sugestion.username} className="sugestion">
              <div className="thesuggestedprofiles">
              <img src={sugestion.picture} />
                <div className="thesugestions">
                  <div className="optionprofilename">{sugestion.username}</div>
                  <div className="followyou">Segue você</div>
                </div>
              </div>
              <div className="follow">Seguir</div>
            </div>
          ))}
          <div className="notes">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>
          <div className="text-copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
      </>
    );
  }