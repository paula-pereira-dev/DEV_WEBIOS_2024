  document.body.style.backgorundColor = "black"

  document.title = "Socorro DOM"

  //Alterar atributo lang

  document.documentElement.lang = "pt-br"

  //document.documentElement.lang = "navigator"

  //criação de elementos com JS

  
  let campoNovo = document.createElement
  ('button')

  //Inserir estilo dentro do HTML

  campoNovo.style.backgroundColor = "red"
 campoNovo.style.borderRadius = "5px"
  //informr em qual elemento queremos inserir o botao

  document.body.appendChild(campoNovo).innerHTML = "Enviar"

