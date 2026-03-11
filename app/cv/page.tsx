"use client";
import cv from "@/src/data/cvdata.json";
import "./cv.css";

export default function CVPage() {
    return (
        <main className="cv-wrapper">
            <div className="cv-container">

                <header className="cv-header">
                    <h1>{cv.name}</h1>
                    <p className="title">{cv.title}</p>

                    <div className="links">
                        <a href={`mailto:${cv.email}`}>{cv.email}</a>
                        <a href={cv.links.github}>GitHub</a>
                        <a href={cv.links.linkedin}>LinkedIn</a>
                        <a href={cv.links.leetcode}>LeetCode</a>
                    </div>
                </header>

                {/* Education */}
                <section>
                    <h2>Education</h2>
                    {cv.education.map((edu, i) => (
                        <div key={i} className="item">
                            <div className="item-header">
                                <strong>{edu.degree}</strong>
                                <span>{edu.year}</span>
                            </div>
                            <p>{edu.institute}</p>
                            <p className="muted">{edu.score}</p>
                        </div>
                    ))}
                </section>

                {/* Experience */}
                <section>
                    <h2>Experience</h2>

                    {cv.experience.map((exp, i) => (
                        <div key={i} className="item">
                            <div className="item-header">
                                <strong>{exp.role} — {exp.company}</strong>
                                <span>{exp.period}</span>
                            </div>

                            <p className="muted">{exp.location}</p>

                            <ul>
                                {exp.points.map((p, idx) => (
                                    <li key={idx}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Skills */}
                <section>
                    <h2>Technical Skills</h2>

                    <div className="skills">
                        <p><strong>Languages:</strong> {cv.skills.languages.join(", ")}</p>
                        <p><strong>Frameworks:</strong> {cv.skills.frameworks.join(", ")}</p>
                        <p><strong>Databases:</strong> {cv.skills.databases.join(", ")}</p>
                        <p><strong>Cloud:</strong> {cv.skills.cloud.join(", ")}</p>
                        <p><strong>Tools:</strong> {cv.skills.tools.join(", ")}</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2>Projects</h2>

                    {cv.projects.map((proj, i) => (
                        <div key={i} className="item">
                            <div className="item-header">
                                <strong>{proj.name}</strong>
                                <span>{proj.year}</span>
                            </div>

                            <ul>
                                {proj.description.map((d, idx) => (
                                    <li key={idx}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Certifications */}
                <section>
                    <h2>Certifications & Achievements</h2>

                    <ul>
                        {cv.certifications.map((c, i) => (
                            <li key={i}>{c}</li>
                        ))}
                    </ul>
                </section>

                {/* Misc */}
                <section>
                    <h2>Miscellaneous</h2>

                    <p><strong>Hobbies:</strong> {cv.misc.hobbies.join(", ")}</p>
                    <p><strong>Interests:</strong> {cv.misc.interests.join(", ")}</p>
                </section>

                <button className="print-btn" onClick={() => window.print()}>
                    Download / Print CV
                </button>

            </div>
        </main>
    );
}