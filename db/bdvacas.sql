drop DATABASE if EXISTS Gestion_Vacaciones;
create database Gestion_Vacaciones;
use Gestion_Vacaciones

create table empleados
(
usuario varchar(50),
Nombre varchar(50),
Apellido varchar(50),
Telefono int(10),
direccion varchar(25),
localidad varchar(25),
fechaing DATE,
area VARCHAR(50),
 PRIMARY KEY(id_empleado)
 );

insert into empleados values (1, "Juan", "M", 100000, "mi casa", "mi localidad");
 
create table jefe
(
Id_Jefe int,
Id_Empleado int,
PRIMARY KEY(Id_Jefe),
FOREIGN KEY (Id_Empleado) REFERENCES empleados (Id_Empleado)
);


create table vacaciones
(
Id_Vacacion int,
Estado boolean DEFAULT FALSE,
FechaI date,
FechaF date,
Id_Empleado int,
PRIMARY KEY (Id_jefe),
FOREIGN KEY (Id_Empleado) REFERENCES empleados (Id_Empleado)
);
