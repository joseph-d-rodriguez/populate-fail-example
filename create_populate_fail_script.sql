create database populate_fail;
use populate_fail;

create table lookup (code integer, value varchar(255));
insert into lookup values(1, 'apple');
insert into lookup values(2, 'banana');
insert into lookup values(3, 'cherry');
insert into lookup values(4, 'durian');

create table data (value double, lookup_id integer);
insert into data values(1.1, 1);
insert into data values(2.2, 2);
insert into data values(3.3, 3);
insert into data values(4.4, 4);
insert into data values(5.5, 1);
insert into data values(6.6, 2);
insert into data values(7.7, 3);
insert into data values(8.8, 4);

