-- /*
--   Warnings:

--   - A unique constraint covering the columns `[title,date_of_post,classroom_id]` on the table `ClassroomNew` will be added. If there are existing duplicate values, this will fail.

-- */
-- DropIndex
DROP INDEX "ClassroomNew_title_key";

-- -- CreateIndex
CREATE UNIQUE INDEX "ClassroomNew_title_date_of_post_classroom_id_key" ON "ClassroomNew"("title", "date_of_post", "classroom_id");

-- INSERT INTO "User"("id", "email", "name", "password", "role") VALUES
-- ('a2c43f6e-5220-454a-8d7a-6d4f78c68435', 'abcd@gmail.com', 'João Paulo', '$2a$12$KV6iODMKGPsLhSaoHN.dB.bJlK.LBQrfOsqOd/5DRgf86oN7upKji', 'STUDENT'),
-- ('044f9aae-69a2-4385-8bc9-0a1001dd4cd4', 'ab12cd@gmail.com', 'João Vitor', '$2a$12$dG14D9CKNLxI5ijDcMOvPuxRdiWcxTeNKKlk0rW2Uv/n7NIxFvARq', 'STUDENT'),
-- ('7ce7deff-1e8f-4d43-991b-2c1b97212543', 'ab32cd@gmail.com', 'João Almeida', '$2a$12$keJNfp/7EqsbOl4jb0xH9.h7C57HJG5CJbBQFEnjk3H3iPGvLNAUu', 'STUDENT'),
-- ('a339a513-a1db-453a-91e9-8eab80b60c2e', 'ab11cd@gmail.com', 'Daniel Almeida', '$2a$12$VOK4mDAnOdvmwaIZKqxOgOE7uMo6QZkW5J4Rohhkez0u7kEgqFHv6', 'STUDENT'),
-- ('e58e248d-2810-4cc4-9a0e-6b58018c4315', 'abc114d@gmail.com', 'João Pedro', '$2a$12$Ix3R1Qusaw.o6d/Nx/4n8.W/FS9GZ1ae87FrBMuJgBQM1D0riooAG', 'STUDENT'),
-- ('e37e75da-b37b-4ced-8053-95f25991dd60', 'abc1d@gmail.com', 'Ana Maria', '$2a$12$92Rhmjo8f.TzQK1T7pTi3Og0O6JhXl9yKkMSEV8iqiNSnZewo4FsG', 'STUDENT'),
-- ('985561d0-2f4a-48b5-905a-c66c7118b410', 'a123bcd@gmail.com', 'Marcos Pereira', '$2a$12$92Rhmjo8f.TzQK1T7pTi3Og0O6JhXl9yKkMSEV8iqiNSnZewo4FsG', 'STUDENT'),
-- ('ec71cfa2-7f0d-4176-a345-d4c96143d7b3', 'abc12d@gmail.com', 'Jessica do Santos', '$2a$12$Hjtb7V/dDhstWqrhkT9OH./hSGEpqM06HD8zZIXlYSsarWdiGjYE6', 'STUDENT'),
-- ('c3ea287f-6895-4a38-89de-8d0d551055cb', 'ab213cd@gmail.com', 'Alex Son', '$2a$12$8VMu92S8VOKT7vRGK8zdVu/NCdAQlIrCFsKaXpUs/cgG9.Yl5MeQi', 'STUDENT'),
-- ('20bc5f05-f30d-47d7-9835-cf1070039abf', 'abc121d@gmail.com', 'Victor Martins', '$2a$12$B5syTd3TZSvoNjSVy5RUHOfy.lHIT2t3Y4CD8DPH3vIChUMEA.nne', 'STUDENT'),
-- ('04d6b361-7391-498c-a246-901454b21edb', 'abcde@gmail.com', 'Paulyne Matthews', '$2a$12$ytkrXK.kLUMa2wv2tdEu7uUnAg2TdFi.yx9cK15tb9djLkSbmm1yC', 'TEACHER'),
-- ('86b578d3-467f-46f4-8890-da31d46f0368', 'a23cd@gmail.com', 'Carla Illane', '$2a$12$A7QLhM4il3/RBqJXBkmPDedHVtZnKIZjB3gz5xHIZJBwvJnTDsva.', 'TEACHER'),
-- ('92f607d4-8766-4464-a840-9b6acdcf7b62', 'c121d@gmail.com', 'Thiago Werlley', '$2a$12$XYdQa.ZoUL3sWDpznG3eMu9RHHcUNClu.5I4k5r0E7MVtO0nJ5Wry', 'TEACHER');

-- INSERT INTO "Student" VALUES
-- ('58d2b8b7-e1eb-455b-9707-e67943c6d65d', 502481, 'ES', 'a2c43f6e-5220-454a-8d7a-6d4f78c68435'),
-- ('acf1d7f1-5113-4246-8b72-a78b9e39d24a', 509481, 'EC', '044f9aae-69a2-4385-8bc9-0a1001dd4cd4'),
-- ('aaf0654f-16e8-4dca-a865-f302ebb052d1', 202481, 'DD', '7ce7deff-1e8f-4d43-991b-2c1b97212543'),
-- ('e7aaa266-117f-454d-b84c-65c205077b88', 342481, 'RC', 'a339a513-a1db-453a-91e9-8eab80b60c2e'),
-- ('cc5c0608-0769-4352-a92b-fd9617ff94cf', 125481, 'ES', 'e58e248d-2810-4cc4-9a0e-6b58018c4315'),
-- ('b310562d-bb08-487c-a9e0-67c2de6d7066', 503581, 'SI', 'e37e75da-b37b-4ced-8053-95f25991dd60'),
-- ('43f9dbe8-f091-4e21-8ba0-9ec3b7549d81', 523411, 'CC', '985561d0-2f4a-48b5-905a-c66c7118b410'),
-- ('14d244f0-649a-46d4-95eb-82d1f0471dbe', 712361, 'CC', 'ec71cfa2-7f0d-4176-a345-d4c96143d7b3'),
-- ('b8fa523b-6b80-4844-96f0-516894e09de0', 928193, 'SI', 'c3ea287f-6895-4a38-89de-8d0d551055cb'),
-- ('fde479e4-1469-4dfe-b234-ac3ab5b2fc61', 502491, 'CC', '20bc5f05-f30d-47d7-9835-cf1070039abf');

-- INSERT INTO "Teacher" VALUES
-- ('25d52d4f-42c2-4d5c-a952-62f60bcc8fc5', '812.123.100-91', '04d6b361-7391-498c-a246-901454b21edb'),
-- ('fce8a7b6-ca4e-47be-a450-799474d6e50a', '812.193.900-01', '86b578d3-467f-46f4-8890-da31d46f0368'),
-- ('e86d278b-8834-4102-a4e1-5d823765773a', '812.103.112-21', '92f607d4-8766-4464-a840-9b6acdcf7b62');

-- INSERT INTO "Discipline" VALUES
-- ('04fa7cc4-8f6f-46b2-8a99-1adba5e25563', 'QXD001', 'Sistemas Operacionais', '', 4.0),
-- ('9754e520-1547-4426-92d6-fb6dc0b47356', 'QXD002', 'Verificação e Validação', '', 4.0),
-- ('740d5515-9423-4c43-a94e-75a2f3514fe7', 'QXD003', 'Projeto Detalhado de Software', '', 4.0),
-- ('97082a98-edf9-4c26-acdd-cdc6656d275f', 'QXD004', 'Requisitos de Software', '', 4.0);

-- INSERT INTO "Plan" VALUES
-- ('b9178913-819f-4539-8a14-c1575cf9c37b',
--  'A verificação e a validação do software...', 'Objetivos e restrições de V&V...', 'Conscientizar os alunos sobre...',
--  '2023/07/20', 'Aulas teóricas e aulas práticas', 'participar das aulas, realizar...', 'Prova e trabalhos práticos',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'projetor, laboratório'),
-- ('137df0ee-4a34-4106-9871-46e76b00d586',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  '2022/12/10', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'),
-- ('88f8f1a2-9e72-4165-b4c7-d2d329e93d21',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  '2022/06/20', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'),
-- ('35054139-3394-4001-9a95-ee5ceac81711',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  '2023/06/18', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'),
--  ('c9f1cdb8-3f30-4e23-a3a6-1e95d482e915',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  '2023/06/10', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'),
--  ('e02c42fc-c871-40d3-b084-8d14bb30e3a1',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  '2023/06/16', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',
--  'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet');

-- INSERT INTO "Classroom" VALUES
-- ('8b4d89a6-d51a-4a0d-92b3-dc723d8ed299', '2023.1', 'e86d278b-8834-4102-a4e1-5d823765773a', '04fa7cc4-8f6f-46b2-8a99-1adba5e25563', 'b9178913-819f-4539-8a14-c1575cf9c37b'),
-- ('3ba092b2-859d-42e2-824d-094059e6b688', '2022.2', 'e86d278b-8834-4102-a4e1-5d823765773a', '04fa7cc4-8f6f-46b2-8a99-1adba5e25563', '137df0ee-4a34-4106-9871-46e76b00d586'),
-- ('b2ef4990-6944-4a78-a343-7888c11c9044', '2022.1', 'e86d278b-8834-4102-a4e1-5d823765773a', '04fa7cc4-8f6f-46b2-8a99-1adba5e25563', '88f8f1a2-9e72-4165-b4c7-d2d329e93d21'),
-- ('b64c8c1c-ce0e-4e84-89cd-e6dc381a1004', '2023.1', '25d52d4f-42c2-4d5c-a952-62f60bcc8fc5', '9754e520-1547-4426-92d6-fb6dc0b47356', '35054139-3394-4001-9a95-ee5ceac81711'),
-- ('8570a362-975d-4398-873c-f2fc51227070', '2023.1', '25d52d4f-42c2-4d5c-a952-62f60bcc8fc5', '740d5515-9423-4c43-a94e-75a2f3514fe7', 'c9f1cdb8-3f30-4e23-a3a6-1e95d482e915'),
-- ('bb378d24-60e9-4926-9bd4-f6a7eff3dbc1', '2023.1', 'fce8a7b6-ca4e-47be-a450-799474d6e50a', '97082a98-edf9-4c26-acdd-cdc6656d275f', 'e02c42fc-c871-40d3-b084-8d14bb30e3a1');

-- INSERT INTO "ClassroomNew" VALUES
-- ('f2321964-f050-4d6b-944c-b1154f032772', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299', 'Lorem ipsum dolo', 'Lorem ipsum'),
-- ('96a2d765-0172-4148-987f-4f0b35f98806', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299', 'Não tera aula hoje', 'Lorem ipsum'),
-- ('43f47cbb-9087-406e-8b9f-6d77f107c283', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299', 'Prova Adiada', 'Lorem ipsum'),
-- ('8cda8f98-39f7-48fb-8138-fc0738982319', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299', 'Prova amanha', 'Lorem ipsum'),
-- ('c322ce2d-240a-432c-a96e-6d7e7b2105f3', 'b64c8c1c-ce0e-4e84-89cd-e6dc381a1004', 'Segue os slides', 'Lorem ipsum'),
-- ('e32320db-f57b-4a7a-87d2-795b30d3e4f0', 'b64c8c1c-ce0e-4e84-89cd-e6dc381a1004', 'A Atividade foi postada ', 'Lorem ipsum'),
-- ('b1e01bd6-02ae-46f3-ad7a-59ee21009aac', '8570a362-975d-4398-873c-f2fc51227070', 'Segue o PDF do livro', 'Lorem ipsum'),
-- ('5904dfc4-21d0-44b4-bafc-e91c13e2a5ad', 'bb378d24-60e9-4926-9bd4-f6a7eff3dbc1', 'Lorem ipsu', 'Lorem ipsum'),
-- ('8779ae3c-af1e-40f0-b5c5-95ad30a421b4', '8570a362-975d-4398-873c-f2fc51227070', 'Lorem ipsum dr', 'Lorem ipsum'),
-- ('393c1d24-e8cb-4f06-a59a-aa1d3b13796c', 'bb378d24-60e9-4926-9bd4-f6a7eff3dbc1', 'Lorem ipsum dor', 'Lorem ipsum');

-- INSERT INTO "GeneralNew" VALUES
-- ('4c29219a-0d43-40a3-ad1a-5df5f9602160', 'Game Day', 'Lorem ipsum', 'water-bloc.png', 'https://www.quixada.ufc.br/2023/04/17/pet-ti-realiza-gameday-em-06-de-maio/'),
-- ('62e3577e-a012-49d8-8a8e-72bd97d95f8f', 'Game Night', 'Lorem ipsum', 'gamenight.png', 'https://www.quixada.ufc.br/2022/01/14/pet-ti-realiza-a-8a-edicao-da-gamenight/'),
-- ('acaadac7-09a1-45c3-a951-8510ed568285', 'Calourada PACCE', 'Lorem ipsum', 'water-bloc.png', 'https://www.quixada.ufc.br/2023/04/17/pet-ti-realiza-gameday-em-06-de-maio/'),
-- ('8c54c2fe-77a4-461b-9999-1f96af549505', 'Periodo de Trancamento', 'Lorem ipsum', 'water-bloc.png', 'https://www.quixada.ufc.br/2023/04/17/pet-ti-realiza-gameday-em-06-de-maio/'),
-- ('71ee6c28-e870-4d15-8766-d5826902d324', 'Celula de Poker', 'Lorem ipsum', 'water-bloc.png', 'https://www.quixada.ufc.br/2023/04/17/pet-ti-realiza-gameday-em-06-de-maio/'),
-- ('3362c92c-a3b2-4c35-8bb0-5b7395a147a3', 'Celula de RPG', 'Lorem ipsum', 'water-bloc.png', 'https://www.quixada.ufc.br/2023/04/17/pet-ti-realiza-gameday-em-06-de-maio/');

-- INSERT INTO "ClassPlan" VALUES
-- (1, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/16', 'Apresentação da disciplina...', 'Apresentação da disciplina...'),
-- (2, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/17', 'O que é teste. conceitos...', 'O que é teste. conceitos...'),
-- (3, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/23', 'Processo de teste. Etapas...', 'Processo de teste. Etapas...'),
-- (4, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/24', 'Importância do teste para...', 'Importância do teste para...'),
-- (5, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/30', 'Habilidades de um testador...', 'Habilidades de um testador...'),
-- (6, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/03/31', 'Teste de caixa branca', 'Teste de caixa branca'),
-- (7, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/04/13', 'Teste de caixa preta', 'Teste de caixa preta'),
-- (8, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/04/14', 'Teste de caixa preta', 'Teste de caixa preta'),
-- (9, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/04/20', 'Níveis de teste: sistema...', 'Níveis de teste: sistema...'),
-- (10, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/04/27', 'TDD', 'BDD'),
-- (11, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/04/28', 'TDD', 'BDD'),
-- (12, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/05/04', 'TDD', 'TDD'),
-- (13, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/05/05', 'Recebimento de trabalho de TDD', 'TDD exemplo 2'),
-- (14, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/05/11', 'Teste de Integração', 'revisão e exercício de TDD'),
-- (15, 'b9178913-819f-4539-8a14-c1575cf9c37b', '2023/05/12', 'Mocks e Stubs', 'teste de integracao');

-- INSERT INTO "ClassroomStudent" VALUES
-- ('58d2b8b7-e1eb-455b-9707-e67943c6d65d', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('58d2b8b7-e1eb-455b-9707-e67943c6d65d', '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('acf1d7f1-5113-4246-8b72-a78b9e39d24a', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('acf1d7f1-5113-4246-8b72-a78b9e39d24a', '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('aaf0654f-16e8-4dca-a865-f302ebb052d1', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('aaf0654f-16e8-4dca-a865-f302ebb052d1', '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('cc5c0608-0769-4352-a92b-fd9617ff94cf', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('cc5c0608-0769-4352-a92b-fd9617ff94cf', '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('b310562d-bb08-487c-a9e0-67c2de6d7066', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('b310562d-bb08-487c-a9e0-67c2de6d7066', '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('e7aaa266-117f-454d-b84c-65c205077b88', '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'), ('e7aaa266-117f-454d-b84c-65c205077b88', '3ba092b2-859d-42e2-824d-094059e6b688');

-- INSERT INTO "Activity"("id", "title", "description", "receive_data", "points", "is_frequency_worthing", "is_exam", "classroom_id") VALUES
-- ('5fbc5586-6ce4-4c6c-9bf6-29514b667c66', 'Prova1', 'Lorem Ipsum', '2023/06/12', 5.0, FALSE, TRUE, '8b4d89a6-d51a-4a0d-92b3-dc723d8ed299'),
-- ('cfa53272-5f26-4c85-855c-c31fff677de6', 'Prova2', 'Lorem Ipsum', '2023/06/07', 10.0, TRUE, TRUE, '3ba092b2-859d-42e2-824d-094059e6b688'),
-- ('4f44d7f3-4057-45ca-8e54-695d2b3ac735', 'Prova3', 'Lorem Ipsum', '2023/06/08', 2.0, FALSE, TRUE, 'b2ef4990-6944-4a78-a343-7888c11c9044'),
-- ('e7a69a25-4341-409e-83e5-6f40e65f713b', 'Atividade1', 'Lorem Ipsum', '2023/06/12', 1.0, FALSE, FALSE, 'b64c8c1c-ce0e-4e84-89cd-e6dc381a1004'),
-- ('50d3f29b-544b-4c18-a535-95df9035c449', 'Atividade2', 'Lorem Ipsum', '2023/06/07', 1.0, TRUE, FALSE, '8570a362-975d-4398-873c-f2fc51227070'),
-- ('5ea2f692-2841-4eed-b245-e8b95f882ede', 'Atividade3', 'Lorem Ipsum', '2023/06/08', 1.0, TRUE, FALSE, 'bb378d24-60e9-4926-9bd4-f6a7eff3dbc1');
