import { BASE_URL } from "../api";
import React from "react";

function Card({ card, onDelete }) {
  // current logged-in (simulated) user
  const currentUserId = localStorage.getItem("userId");

  return (
    <div className="profile-card">
      {/* Delete button only for card owner */}
      {card.createdBy === currentUserId && (
        <button
          className="delete-btn"
          onClick={() => onDelete(card._id)}
          title="Delete card"
        >
          ✕
        </button>
      )}

      {/* Image */}
      <div className="image-wrapper">
        {card.imageUrl ? (
          <img
            src={`${BASE_URL}${card.imageUrl}`}
            alt={card.name}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            No Image
          </div>
        )}
      </div>

      {/*  Content */}
      <div className="profile-content">
        <h2>{card.name}</h2>
        <p>{card.bio}</p>

        {/*  Interests */}
        {Array.isArray(card.interests) && card.interests.length > 0 && (
          <>
            <div className="interests-title">Interests</div>
            <ul className="interests-list">
              {card.interests.map((interest, index) => (
                <li key={index}>✅ {interest}</li>
              ))}
            </ul>
          </>
        )}

        {/*  Social links */}
        <div className="socials">
          {card.socials?.twitter && (
            <a
              className="twitter"
              href={card.socials.twitter}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          )}
          {card.socials?.github && (
            <a
              className="github"
              href={card.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          {card.socials?.linkedin && (
            <a
              className="linkedin"
              href={card.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

