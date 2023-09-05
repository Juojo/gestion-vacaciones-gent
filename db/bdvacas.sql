drop DATABASE if EXISTS

use DATABASE Gestion_Vacaciones

create database Gestion_Vacaciones;


create table empleados
(
Id_Empleado int,
Nombre varchar(50),
Apellido varchar(50),
Telefono int(10),
direccion varchar(25),
localidad varchar(25),
 PRIMARY KEY(id_empleado)
 );