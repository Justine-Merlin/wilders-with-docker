--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0 (Debian 15.0-1.pgdg110+1)
-- Dumped by pg_dump version 15.0 (Debian 15.0-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: languages; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.languages (
    id integer NOT NULL,
    label text NOT NULL
);


ALTER TABLE public.languages OWNER TO root;

--
-- Name: languages_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.languages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.languages_id_seq OWNER TO root;

--
-- Name: languages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.languages_id_seq OWNED BY public.languages.id;


--
-- Name: scores; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.scores (
    id integer NOT NULL,
    value integer NOT NULL,
    "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
    "wilderId" integer,
    "languageId" integer
);


ALTER TABLE public.scores OWNER TO root;

--
-- Name: scores_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.scores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scores_id_seq OWNER TO root;

--
-- Name: scores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.scores_id_seq OWNED BY public.scores.id;


--
-- Name: wilders; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.wilders (
    id integer NOT NULL,
    "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    age integer
);


ALTER TABLE public.wilders OWNER TO root;

--
-- Name: wilders_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.wilders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wilders_id_seq OWNER TO root;

--
-- Name: wilders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.wilders_id_seq OWNED BY public.wilders.id;


--
-- Name: wilders_languages_languages; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.wilders_languages_languages (
    "wildersId" integer NOT NULL,
    "languagesId" integer NOT NULL
);


ALTER TABLE public.wilders_languages_languages OWNER TO root;

--
-- Name: languages id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_seq'::regclass);


--
-- Name: scores id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.scores ALTER COLUMN id SET DEFAULT nextval('public.scores_id_seq'::regclass);


--
-- Name: wilders id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.wilders ALTER COLUMN id SET DEFAULT nextval('public.wilders_id_seq'::regclass);


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.languages (id, label) FROM stdin;
1	javascript
2	java
3	php
4	ruby
5	python
\.


--
-- Data for Name: scores; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.scores (id, value, "createdDate", "wilderId", "languageId") FROM stdin;
1	15	2022-10-20 15:57:21.266402	1	1
2	18	2022-10-20 15:57:49.468351	1	3
3	13	2022-10-20 15:58:10.864377	2	2
\.


--
-- Data for Name: wilders; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.wilders (id, "createdDate", first_name, last_name, age) FROM stdin;
1	2022-10-20 15:39:54.545981	john	doe	30
2	2022-10-20 15:45:58.63759	emma	blight	22
5	2022-10-21 13:24:18.569098	eric	dupont	\N
6	2022-10-21 14:26:38.637408	eric	dupont	\N
7	2022-10-21 14:40:20.483984	pedro	sanchez	\N
8	2022-10-21 14:43:26.617903	jenny	dawn	25
9	2022-10-21 14:53:44.826975	rebecca	bunch	40
\.


--
-- Data for Name: wilders_languages_languages; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.wilders_languages_languages ("wildersId", "languagesId") FROM stdin;
1	1
1	3
2	2
5	1
6	1
9	3
9	2
9	5
\.


--
-- Name: languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.languages_id_seq', 5, true);


--
-- Name: scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.scores_id_seq', 3, true);


--
-- Name: wilders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.wilders_id_seq', 9, true);


--
-- Name: wilders PK_4e6bdd1e1cac68859f8a85c71d5; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.wilders
    ADD CONSTRAINT "PK_4e6bdd1e1cac68859f8a85c71d5" PRIMARY KEY (id);


--
-- Name: wilders_languages_languages PK_7c3649ff79e23458e674da2d399; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.wilders_languages_languages
    ADD CONSTRAINT "PK_7c3649ff79e23458e674da2d399" PRIMARY KEY ("wildersId", "languagesId");


--
-- Name: languages PK_b517f827ca496b29f4d549c631d; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY (id);


--
-- Name: scores PK_c36917e6f26293b91d04b8fd521; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT "PK_c36917e6f26293b91d04b8fd521" PRIMARY KEY (id);


--
-- Name: languages UQ_415ba93163470aa960035217fa5; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT "UQ_415ba93163470aa960035217fa5" UNIQUE (label);


--
-- Name: IDX_fc483a09e1c784974765c75155; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX "IDX_fc483a09e1c784974765c75155" ON public.wilders_languages_languages USING btree ("languagesId");


--
-- Name: IDX_fe752701a2cc5afb45da951071; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX "IDX_fe752701a2cc5afb45da951071" ON public.wilders_languages_languages USING btree ("wildersId");


--
-- Name: scores FK_ed2ba633cc60298b689cf4fb300; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT "FK_ed2ba633cc60298b689cf4fb300" FOREIGN KEY ("languageId") REFERENCES public.languages(id);


--
-- Name: scores FK_f1d7da5e23d57d22bc63a657e2b; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT "FK_f1d7da5e23d57d22bc63a657e2b" FOREIGN KEY ("wilderId") REFERENCES public.wilders(id) ON DELETE CASCADE;


--
-- Name: wilders_languages_languages FK_fc483a09e1c784974765c751554; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.wilders_languages_languages
    ADD CONSTRAINT "FK_fc483a09e1c784974765c751554" FOREIGN KEY ("languagesId") REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: wilders_languages_languages FK_fe752701a2cc5afb45da9510718; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.wilders_languages_languages
    ADD CONSTRAINT "FK_fe752701a2cc5afb45da9510718" FOREIGN KEY ("wildersId") REFERENCES public.wilders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

