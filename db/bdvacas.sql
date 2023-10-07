drop DATABASE if EXISTS Gestion_Vacaciones;
create database Gestion_Vacaciones;
use Gestion_Vacaciones

create table empleados
(
dni int,
Nombre varchar(50),
Apellido varchar(50),
contrasena VARCHAR(50),
Telefono int(10),
email varchar(50),
direccion varchar(25),
localidad varchar(25),
fechaing DATE,
area VARCHAR(50),
 PRIMARY KEY(dni)
 );

insert into empleados values (0, "Juan", "M", 123, 100000, "mail", "mi dire", "mi localidad", 2023-01-01, "area");

 
create table jefe
(
Id_Jefe int,
Id_Empleado int,
PRIMARY KEY(Id_Jefe),
FOREIGN KEY (Id_Empleado) REFERENCES empleados (dni)
);



insert into jefe values (0, 0);

select *
from jefe
where Id_Empleado = 0;

create table vacaciones
(
Id_Vacacion int,
Estado boolean DEFAULT FALSE,
FechaI date,
FechaF date,
Id_Empleado int,
PRIMARY KEY (Id_jefe),
FOREIGN KEY (dni) REFERENCES empleados (dni)
);