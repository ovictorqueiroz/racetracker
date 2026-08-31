# Tabelas

## usuario
- idCliente (integer)
- nomeUsuario (varchar)
- email (varchar)
- senha (varchar)

## evento
- idEvento (integer)
- nomeEvento (varchar)
- dataHora (datetime)
- tipoEvento (FK)
- categoria (FK)
- campeonato (FK)
- circuito (FK)

## preferencias_categoria 
// tabela intermediária entre Categorias e Usuário. Ela mapeia quais categorias o usuário deseja acompanhar dentro da plataforma
- idCliente (integer)
- idCategoria (integer)

## tipoEvento
- idTipoEvento (integer)
- descTipo (varchar)

## categoria
- idCategoria (integer)
- nomeCategoria (varchar)

## campeonato
- idCampeonato (integer)
- nomeCampeonato (varchar)

## circuito
- idCircuito (integer)
- nomeCircuito (varchar)
- pais (varchar)
- cidade (varchar)
- extensao (varchar)
- numCurvas (integer)


