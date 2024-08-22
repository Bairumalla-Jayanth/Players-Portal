import React from 'react';
import {  Routes, Route, Link, useNavigate } from 'react-router-dom'
import "./App.css"

const Overview = () => <div><h2>Overview</h2><p>Chelsea Football Club is a professional football club based in Fulham, west London, England. The club competes in the Premier League, the top tier of English football. Founded in 1905, the team play their home games at Stamford Bridge.[4] It won its first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and became the third English club to win the Club World Cup in 2022.

Chelsea is one of five clubs and the first English club to have won all three pre-1999 main European club competitions, the "European Treble" of European Cup/UEFA Champions League, European/UEFA Cup Winners' Cup, and UEFA Cup/UEFA Europa League.[5] They are the only club to have won all three major European competitions twice. They are the only London club to have won the Champions League and the Club World Cup.[6] Domestically, the club has won six league titles, eight FA Cups, five League Cups, and four FA Community Shields. Internationally, they have won the UEFA Champions League, the UEFA Europa League, the UEFA Cup Winners' Cup and the UEFA Super Cup twice each, and the FIFA Club World Cup once. In terms of overall trophies won, Chelsea is the fifth-most successful club in English football.

The club has rivalries with neighbouring teams Arsenal and Tottenham Hotspur, and a historic rivalry with Leeds United. In terms of club value, Chelsea is the ninth-most-valuable football club in the world (as of 2024), worth $3.13 billion, and is the ninth-highest-earning football club in the world.</p></div>;
const Stadium = () => <div><h2>Stadium</h2><p>Stadium
Main article: Stamford Bridge (stadium)

Stamford Bridge, West Stand
Chelsea have only had one home ground, Stamford Bridge, where they have played since the team's foundation. The stadium was officially opened on 28 April 1877 and for the next 28 years it was used by the London Athletic Club as an arena for athletics meetings. In 1904, the ground was acquired by businessman Gus Mears and his brother Joseph, who had purchased nearby land (formerly a large market garden) with the aim of staging football matches on the now 12.5 acre (51,000 m2) site.[96] Stamford Bridge was designed for the Mears family by the noted football architect Archibald Leitch, who had designed Ibrox, Craven Cottage and Hampden Park.[97] Most football clubs were founded first, and then sought grounds in which to play, but Chelsea were founded for Stamford Bridge.

Starting with an open bowl-like design and one grandstand with seating, Stamford Bridge had an original capacity of around 100,000, making it the second biggest stadium in England after Crystal Palace.[96] The early 1930s saw the construction of a terrace on the southern part of the ground with a roof that covered around 20% of the stand. As the roof resembled that of a corrugated iron shed, the stand eventually became known as the "Shed End", although it is unknown who first coined this name. From the 1960s, it became known as the home of Chelsea's most loyal and vocal supporters.[96] In 1939, another small seated stand was added, the North Stand, which remained until its demolition in 1975.</p></div>;
const History = () => <div><h2>History</h2><p>BlueCo ownership (2022–present)
Main article: History of Chelsea F.C. (2022–present)
We're all in – 100% – every minute of every match. Our vision as owners is clear: we want to make the fans proud.

—Todd Boehly, addressing the press after the takeover.[77]

On 7 May 2022, Chelsea confirmed that terms have been agreed for a new ownership group, led by Todd Boehly, Clearlake Capital, Mark Walter and Hansjörg Wyss, to acquire the club. The group was later known as BlueCo.[78] The UK government approved the £4.25bn takeover,[79] ending Abramovich's 19-year ownership of the club.[80] Bruce Buck, who served as chairman since 2003, was replaced by Boehly,[81] while long-serving club director and de facto sporting director Marina Granovskaia left,[82] as did Petr Čech from the role of technical and performance advisor.[83]

The club brought in Graham Potter from Brighton & Hove Albion to replace Tuchel on 8 September 2022. Chelsea won six of the first 11 games of the 2022–23 season, but only five of the remaining 27. Potter would be sacked on 2 April 2023 and eventually be replaced by Frank Lampard as caretaker manager.[84] Under Lampard the club would only win one of their last 11 matches resulting in a 9% win percentage. Lampard's win percentage was the worst for any Chelsea manager who managed three games or more.[85] Chelsea scored a record-low 38 goals across the entire season and finished in the bottom half of the table for the first time since 1995–96.[86]

Mauricio Pochettino was announced as Lampard's replacement on 1 July 2023 on a two-year contract.[87] He led Chelsea to a 6th-place finish after winning their final five games of the 2023–24 season, which earned the club a Conference League play-off round qualification.[88] After clashing with the sporting directors Laurence Stewart and Paul Winstanley over strategy and management of the young squad,[89][90][91][92] Pochettino agreed to leave the club at the end of the season.[93][94]

On 3 June 2024, Enzo Maresca was announced as Pochettino's replacement, with the Italian set to start his activity on 1 July 2024.</p></div>;

const About = () => {
  let navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>About Chelsea Football Club</h1>
      <nav className="about-nav">
        <ul>
          <li><Link to="/about/overview">Overview</Link></li>
          <li><Link to="/about/stadium">Stadium</Link></li>
          <li><Link to="/about/history">History</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="stadium" element={<Stadium />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
};

export default About;
