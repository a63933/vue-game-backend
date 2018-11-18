create table if not exists userlist(
  user_id int primary key not null auto_increment,
  username varchar(20),
  password varchar(50),
  tellphone varchar(15),
  portrait varchar(50),
  email varchar(50),
  city varchar(10),
  interest varchar(50),
  introduce varchar(3000),
  qq varchar(12)
)
