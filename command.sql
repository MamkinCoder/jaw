CREATE TABLE entry (
    entry_id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    age SMALLINT NOT NULL,
    gender BOOLEAN NOT NULL,
    q1 BOOLEAN[],
    q2 VARCHAR(200),
    q3 BOOLEAN[] NOT NULL,
    q4 BOOLEAN[] NOT NULL,
    q5 BOOLEAN[] NOT NULL,
    q6 BOOLEAN[] NOT NULL,
    q7 BOOLEAN[] NOT NULL,
    q8 BOOLEAN[] NOT NULL,
    q9 BOOLEAN[] NOT NULL,
    q10 BOOLEAN[] NOT NULL,
    q11 VARCHAR(200),
    q12 BOOLEAN[] NOT NULL,
    q13 BOOLEAN[] NOT NULL
);

-- Adding comments to the columns
COMMENT ON COLUMN person.name IS 'ФИО';
COMMENT ON COLUMN person.q1 IS 'Беспокоят ли Вас: 1. Головные боли 2. Боли в шее 3. Дискомфорт/боли в плечах и лопатках 4. Не беспокоят';
COMMENT ON COLUMN person.q2 IS 'Какое давление вы считаете для себя нормой';
COMMENT ON COLUMN person.q3 IS 'Беспокоят ли Вас боли в челюстях? 1. В покое 2. Во время приема пищи 3. После приема пищи 4. Не беспокоит';
COMMENT ON COLUMN person.q4 IS 'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС? 1. Да, ощущаю щёлкание 2. Да, ощущаю трение 3. Да, ощущаю боль 4. Нет, не ощущаю';
COMMENT ON COLUMN person.q5 IS 'Испытываете ли Вы напряженность, затруднение при открывании рта? 1. Да, часто 2. Да, редко 3. Нет';
COMMENT ON COLUMN person.q6 IS 'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса? 1. Да, часто 2. Да, редко 3. Нет';
COMMENT ON COLUMN person.q7 IS 'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны? 1. Да, часто 2. Да, редко 3. Нет';
COMMENT ON COLUMN person.q8 IS 'Имеют ли ваши зубы повышенную чувствительность? 1. Да, имеют 2. Нет, не имеют';
COMMENT ON COLUMN person.q9 IS 'Бывает ли у вас тревожность, раздражительность, нарушение сна? 1. Да, бывает тревожность 2. Да, бывает раздражительность 3. Да, бывает нарушение сна 4. Нет, небывает';
COMMENT ON COLUMN person.q10 IS 'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи. 1. Да, посещал(а) невролога 2. Да, посещал(а) психолога 3. Да, посещал(а) психиатра 4. Нет, не посещал(а)';
COMMENT ON COLUMN person.q11 IS 'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос).';
COMMENT ON COLUMN person.q12 IS 'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах? 1. Да, кружится голова 2. Да, закладывает уши 3. Да, слышу звон в одном (или обоих) ушах 4. Нет, не случается';
COMMENT ON COLUMN person.q13 IS 'Похож ли этот шум на звон, свист, треск?';

CREATE INDEX idx_person_last_name ON person ();
