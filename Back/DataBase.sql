create database if not exists JobMatch;

use JobMatch;

create table Enderecos (
	IDEndereco int primary key auto_increment,
    Pais varchar(20) not null,
    UF char(2) not null,
    Municipio varchar(30) not null,
    Cep varchar(9) not null,
    Bairro varchar(30) not null,
    Logradouro varchar(30) not null,
    Complemento varchar(20) not null
);

create table Usuarios (
	IDUsuario int primary key auto_increment,
    Nome varchar(60) not null,
    Email varchar(50) not null,
    Cpf varchar(11) not null,
    Senha varchar(50) not null,
    DataNascimento long not null,
    IDEndereco int,
    foreign key (IDEndereco) references Enderecos(IDEndereco)
);

create table Taxas (
	IDTaxa int primary key auto_increment,
    Titulo varchar(30) not null,
    Descricao varchar(255) not null,
    DataInicio long not null,
    DataTermino long,
    Valor double not null,
    QtdTaxa tinyint not null,
    IDUsuario int,
    IDEndereco int,
    foreign key (IDUsuario) references Usuarios(IDUsuario),
    foreign key (IDEndereco) references Enderecos(IDEndereco)
);

# drop database FreeLance;