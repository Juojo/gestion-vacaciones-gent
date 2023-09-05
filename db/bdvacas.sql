drop DATABASE if EXISTS Gestion_Vacaciones;
create database Gestion_Vacaciones;
use Gestion_Vacaciones

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

insert into empleados values (1, "Juan", "M", 100000, "mi casa", "mi localidad");