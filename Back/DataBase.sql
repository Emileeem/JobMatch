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
    Complemento varchar(20) not null,
	createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
);

create table Usuarios (
	IDUsuario int primary key auto_increment,
    Nome varchar(60) not null,
    Email varchar(50) not null,
    Cpf varchar(11) not null,
    Senha varchar(50) not null,
    DataNascimento date not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    IDEndereco int,
    foreign key (IDEndereco) references Enderecos(IDEndereco)
);

create table Taxas (
	IDTaxa int primary key auto_increment,
    Titulo varchar(30) not null,
    Descricao varchar(255) not null,
    DataInicio datetime not null,
    DataTermino datetime,
    Valor double not null,
    QtdTaxa tinyint not null,
    StatusTaxa tinyint not null,
	createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    IDUsuario int not null,
    IDEndereco int not null,
    foreign key (IDUsuario) references Usuarios(IDUsuario),
    foreign key (IDEndereco) references Enderecos(IDEndereco)
);