# Tabelas

## usuario
- idCliente (integer)
- nomeUsuario (varchar)
- senha (varchar)

## evento
- idEvento (integer)
- nomeEvento (varchar)
- dataHora (datetime)
- tipoEvento (FK)
- categoria (FK)
- campeonato (FK)
- circuito (FK)

## tipoEvento
- idTipoEvento
- descTipo

## categoria
- idCategoria
- nomeCategoria

## campeonato
- idCampeonato
- nomeCampeonato

## circuito
- idCircuito
- nomeCircuito
- pais
- cidade
- extensao
- numCurvas


