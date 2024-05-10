<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Render PlantUML in JavaScript</title>
</head>
<body>

<div id="diagram"></div>

<script src="path/to/plantuml-parser.js"></script>
<script>
    // Código PlantUML
    var plantumlCode = `
    @startuml
    package "Interfaces" {
        interface ReprodutorMusical {
            + reproduzirMusica(musica: String)
            + pausarMusica()
            + avancarMusica()
            + retrocederMusica()
        }

        interface AparelhoTelefonico {
            + fazerLigacao(numero: String)
            + receberLigacao(numero: String)
            + encerrarLigacao()
            + enviarMensagem(numero: String, mensagem: String)
            + receberMensagem(mensagem: String)
        }

        interface NavegadorInternet {
            + abrirPagina(url: String)
            + fecharPagina()
            + navegarParaFrente()
            + navegarParaTras()
        }
    }

    package "Implementações" {
        class iPhone {
            implements ReprodutorMusical
            implements AparelhoTelefonico
            implements NavegadorInternet
        }
    }

    ReprodutorMusical -- iPhone
    AparelhoTelefonico -- iPhone
    NavegadorInternet -- iPhone
    @enduml
    `;

 
    var diagramElement = document.getElementById('diagram');
    var parser = new PlantUml.Parser();
    var svgGenerator = new PlantUml.Generator.Svg();
    var diagramSvg = parser.parse(plantumlCode, { format: 'svg' });
    diagramElement.innerHTML = diagramSvg;
</script>

</body>
</html>
