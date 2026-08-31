# Tabelas

## usuario
- idCliente (integer)
- nomeUsuario (varchar)
- senha (varchar)
- preferencias (integer)

## evento
- idEvento (integer)
- nomeEvento (varchar)
- dataHora (datetime)
- tipoEvento (FK)
- categoria (FK)
- campeonato (FK)
- circuito (FK)

## preferencias_categoria // tabela intermediária entre Categorias e Usuário. Ela mapeia quais categorias o usuário deseja acompanhar dentro da plataforma
- idCliente
- idCategoria

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


