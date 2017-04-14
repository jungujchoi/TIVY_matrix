drop table if exists entries;
create table entries (
  id integer primary key autoincrement,
  'IP_add' text not null,
  'Q1_n' text not null,
  'Q1_ans' text not null,
  'Q1_click' text not null,
  'Q1_stime' text not null,
  'Q1_etime' text not null,
  'Q2_n' text not null,
  'Q2_ans' text not null,
  'Q2_click' text not null,
  'Q2_stime' text not null,
  'Q2_etime' text not null
);
