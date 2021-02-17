class EmployeUniversite {
    constructor(nom, prenom, numeroEmploye, anneesExperience) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroEmploye = numeroEmploye;
        this.anneesExperience = anneesExperience;
    }

    augmenterAnciennete() {
        this.anneesExperience++;
    }

    nomComplet() {
        return this.prenom + ", " + this.nom;
    }

/*     information() {
        return this.numeroEmploye + " - "
            + this.nomComplet() +
            " - Ancienneté: " + this.anneesExperience;
    } */
}