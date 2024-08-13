import React, { useEffect } from "react";

export default function RepoCardList() {
  useEffect(() => {
    window.tarptaeya.reloadRepoCards();
  }, []);

  return (
    <div className="repo-card-container">
      <div>
        <h3>Open Source Projects</h3>
      </div>
      <div className="repo-card-list">
        <div className="repo-card" data-repo="tarptaeya/repo-card"></div>
        <div className="repo-card" data-repo="tarptaeya/path_tracer"></div>
        <div className="repo-card" data-repo="tarptaeya/truck"></div>
      </div>
    </div>
  );
}
