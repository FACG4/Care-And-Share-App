BEGIN;
DROP TABLE IF EXISTS  users, connections, discussions, role, state CASCADE;
CREATE TABLE "users" (
  "id" serial NOT NULL,
	"full_name" varchar(30) NOT NULL,
	"user_name" varchar(30) NOT NULL UNIQUE,
	"email" varchar(30) NOT NULL UNIQUE,
	"password" varchar(30) NOT NULL,
	"role_id" int NOT NULL,
	"age" int NOT NULL,
	"interests" varchar(30) NOT NULL,
	"location" varchar(30) NOT NULL,
	"offer" varchar(30) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "connections" (
	"id" serial NOT NULL,
	"first_user_id" int NOT NULL,
	"second_user_id" int NOT NULL,
	"state_id" int NOT NULL,
	"date_created" DATE NOT NULL,
	CONSTRAINT connections_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "discussions" (
	"massage_id" serial NOT NULL,
	"massage_body" varchar(1000) NOT NULL,
	"sender_id" int NOT NULL,
	"receiver_id" int NOT NULL,
	CONSTRAINT discussions_pk PRIMARY KEY ("massage_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "role" (
	"id" serial NOT NULL,
	"role" varchar(10) NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "state" (
	"id" serial NOT NULL,
	"state" varchar(10) NOT NULL,
	CONSTRAINT state_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("role_id") REFERENCES "role"("id");

ALTER TABLE "connections" ADD CONSTRAINT "connections_fk0" FOREIGN KEY ("first_user_id") REFERENCES "users"("id");
ALTER TABLE "connections" ADD CONSTRAINT "connections_fk1" FOREIGN KEY ("second_user_id") REFERENCES "users"("id");
ALTER TABLE "connections" ADD CONSTRAINT "connections_fk2" FOREIGN KEY ("state_id") REFERENCES "state"("id");

ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk0" FOREIGN KEY ("sender_id") REFERENCES "users"("id");
ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk1" FOREIGN KEY ("receiver_id") REFERENCES "users"("id");

INSERT INTO role (role) VALUES
('admin'),
('user'),
('developer');

INSERT INTO users (full_name, user_name, email, password, role_id, age, interests, location, offer) VALUES
('Ahmad Shatat','ahmad','a7m4d.m.sh@gmail.com', '123', '2', '30', 'coding', 'London', 'offer'),
('Farah Zaqout','farah','farah@gmail.com', '123', '2', '25', 'coding', 'Gaza', 'offer'),
('Abdallah Azmi','abdallah','abdallah@gmail.com', '123', '2', '30', 'coding', 'Cairo', 'offer'),
('Eman Khaled','eman','eman@gmail.com', '123', '2', '30', 'coding', 'Washington', 'offer');

COMMIT;
