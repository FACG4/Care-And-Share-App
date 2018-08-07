BEGIN;
DROP TABLE IF EXISTS users, connections, discussions CASCADE;
DROP TYPE IF EXISTS roles, states;
CREATE TYPE roles AS ENUM ('user');
CREATE TYPE states AS ENUM ('approved', 'pending', 'decline');

CREATE TABLE "users" (
  "id" serial NOT NULL,
	"full_name" varchar(30) NOT NULL,
	"user_name" varchar(30) NOT NULL UNIQUE,
	"email" varchar(30) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
  "user_role" roles DEFAULT 'user',
  "image" varchar(200) DEFAULT 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png',
	"age" int,
	"sitution" varchar(300),
	"location" varchar(30),
	"offer" varchar(300),
	"looking" varchar(300),
	CONSTRAINT users_pk PRIMARY KEY ("id")
);

CREATE TABLE "connections" (
	"id" serial NOT NULL,
	"sender_user_id" int NOT NULL,
	"receiver_user_id" int NOT NULL,
	"relation_state" states DEFAULT 'pending',
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT connections_pk PRIMARY KEY ("sender_user_id", "receiver_user_id")
);

CREATE TABLE "discussions" (
	"message_id" serial NOT NULL,
	"message_body" varchar(1000) array,
	"sender_id" int NOT NULL,
	"receiver_id" int NOT NULL,
	CONSTRAINT discussions_pk PRIMARY KEY ("message_id")
);

ALTER TABLE "connections" ADD CONSTRAINT "connections_fk0" FOREIGN KEY ("sender_user_id") REFERENCES "users"("id")  ON DELETE CASCADE;
ALTER TABLE "connections" ADD CONSTRAINT "connections_fk1" FOREIGN KEY ("receiver_user_id") REFERENCES "users"("id")  ON DELETE CASCADE;
ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk0" FOREIGN KEY ("sender_id") REFERENCES "users"("id")  ON DELETE CASCADE;
ALTER TABLE "discussions" ADD CONSTRAINT "discussions_fk1" FOREIGN KEY ("receiver_id") REFERENCES "users"("id")  ON DELETE CASCADE;

INSERT INTO users (full_name, user_name, email, password, age, sitution, location, offer, looking) VALUES
('Alastair Alfie','ahmad','a7m4d.m.sh@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6', '30', 'My grandpa who was paralyzed from his waist down and also had Alzheimer’s.', 'London', 'I can offer to you many advices about Alzheimer’s.', 'I need somebody to talk with to share our knwoledge and support each other.'),
('Angus Archie','farah','farah@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6','25', 'Struggling with breast cancer, and eventually losing her at the early age of 59.', 'Gaza', 'I can offer to you many advices about breast cancer.', 'I need an emotional support to help me to complete what I had started.'),
('Cora Angus','abdallah','abdallah@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6','35', 'A long journey (diabetes, kidney cancer, major back surgery, kidney removal, gall bladder removal, left leg amputation, right foot toe amputation).', 'Cairo', 'I can offer to you many advices about about the carer role also give you the support you want.', 'I need somebody to talk with to share our knwoledge and support each other.'),
('Alfie Alastair','eman','eman@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6', '39', 'My wife, Carol, was diagnosed with Lewy Body Dementia in 2011.  Naturally, the disease progressed, as did her hallucinations.', 'Washington', 'I can offer to you many advices about Lewy Body Dementia.', 'I need an emotional support to help me to complete what I had started.'),
('Olivia','Cora','abdalladh@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6','35', 'My husband has become partially disabled from cervical surgery rendering him unable to move his head and shoulders which is painful and incapacitating in and of itself.', 'Cairo', 'I can offer to you many advices about about the carer role also give you the support you want.', 'I need an emotional support to help me to complete what I had started.'),
('Barnaby Conall','monen','emadn@gmail.com', '$2b$10$KRE5hD7YzFDTsNPWkgXmduQikXy9LHNJz/JRbcSL0mpDARCruino6', '39', 'She had an aortic heart valve replacement and bypass surgery a year before — somehow, a fungus had gotten into her bloodstream and traveled and settled on her heart valve.', 'Washington', 'I can offer to you many advices about about the carer role also give you the support you want.', 'I need somebody to talk with to share our knwoledge and support each other.');

INSERT INTO discussions (message_body, sender_id, receiver_id) values
 ('{"hello", "How are u"}', 1, 2),
 ('{"hello2", "how r you"}', 1, 3);

INSERT INTO connections (sender_user_id,receiver_user_id,relation_state) VALUES
('1','2','pending'),
('2','3','pending'),
('2','4','pending'),
('2','5','pending'),
('2','6','pending'),
('3','6','pending'),
('4','6','pending');

COMMIT;
