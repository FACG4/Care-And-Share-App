BEGIN;
DROP TABLE IF EXISTS  users, connections, discussions CASCADE;
CREATE TYPE roles AS ENUM ('user');
CREATE TYPE states AS ENUM ('approved', 'pending', 'decline');

CREATE TABLE "users" (
  "id" serial NOT NULL,
	"full_name" varchar(30) NOT NULL,
	"user_name" varchar(30) NOT NULL UNIQUE,
	"email" varchar(30) NOT NULL UNIQUE,
	"password" varchar(30) NOT NULL,
  "user_role" roles NOT NULL,
	"age" int NOT NULL,
	"sitution" varchar(300) NOT NULL,
	"location" varchar(30) NOT NULL,
	"offer" varchar(300) NOT NULL,
	"looking" varchar(300) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
);

CREATE TABLE "connections" (
	"id" serial NOT NULL,
	"first_user_id" int NOT NULL,
	"second_user_id" int NOT NULL,
	"relation_state" states NOT NULL,
	"date_created" DATE NOT NULL,
	CONSTRAINT connections_pk PRIMARY KEY ("id")
);

CREATE TABLE "discussions" (
	"massage_id" serial NOT NULL,
	"massage_body" varchar(1000) NOT NULL,
	"sender_id" int NOT NULL,
	"receiver_id" int NOT NULL,
	CONSTRAINT discussions_pk PRIMARY KEY ("massage_id")
);

ALTER TABLE "connections" ADD CONSTRAINT "connections_fk0" FOREIGN KEY ("first_user_id") REFERENCES "users"("id");
ALTER TABLE "connections" ADD CONSTRAINT "connections_fk1" FOREIGN KEY ("second_user_id") REFERENCES "users"("id");
ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk0" FOREIGN KEY ("sender_id") REFERENCES "users"("id");
ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk1" FOREIGN KEY ("receiver_id") REFERENCES "users"("id");


INSERT INTO users (full_name, user_name, email, password, user_role, age, sitution, location, offer, looking) VALUES
('Ahmad Shatat','ahmad','a7m4d.m.sh@gmail.com', '123', 'user', '30', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'London', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.'),
('Farah Zaqout','farah','farah@gmail.com', '123', 'user', '25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Gaza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.'),
('Abdallah Azmi','abdallah','abdallah@gmail.com', '123', 'user', '35', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Cairo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.'),
('Eman Khaled','eman','eman@gmail.com', '123', 'user', '39', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Washington', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa tellus, aliquet quis pulvinar ornare.');

COMMIT;
