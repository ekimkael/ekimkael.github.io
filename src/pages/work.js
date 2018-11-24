import React, { Component } from "react";
import styled from "styled-components";
import Link from "react-router-dom/Link";

import WorkDetail from "../components/WorkDetail/index.js";
import WorkCard from "../components/WorkCard/index.js";

const WorkWidget = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const OtherWorks = styled.section`
  height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
`;

const Loader = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  background: transparent;
  border-radius: 50%;
  border: 1px solid #fff;
`;

/**
 * Quand le composant Work est monté la première fois, il s'initialise avec le
 * componentDidMount. En revanche, quand la route change, le compoosant n'est pas re-rendu,
 * seules les props sont modifiées. C'est pour ça qu'avant, le composant ne se mettait pas à jour,
 * et tu avais dû implémenter un handleClick pour tes liens (ce qui est quand même un peu con parce
 * que c'est le rôle du routeur de s'occuper de ces changements).
 *
 * Là ici, quand la route change, le composant reçoit les nouvelles props, et la méthode
 * getDerivedStateFromProps est lancée. Celle-ci prend en paramètre les props passées, et le state actuel.
 * Elle va ensuite renvoyer un objet avec lequel faire un setState si nécessaire, ou `null` sinon. Ici on
 * vérifie qu'on change de projet (la nouvelle route reçue en props n'est pas la même que le projet précédent),
 * et si oui on va vider le projet en cours (pour ne pas afficher de données vides) sauvegarder l'ID du projet
 * en cours d'affichage (au passage, on pourrait utiliser directement `work` pour savoir si on est en train de
 * charger, si `work === null` alors c'est comme si `loading = true`, et du coup pas besoin de `loading` dans le
 * state).
 * Pourquoi vérifier si on change de route ? Parce que cette méthode est appelée *à chaque fois* que des props
 * sont passées, et ce même si ce sont les mêmes qu'avant. Donc on vérifie de ce côté pour ne pas refaire de
 * rendu ou de fetch inutilement.
 *
 * Une fois que le state a été dérivé des props, on va charger les données à partir de ce state (si nécessaire).
 * La méthode `componentDidUpdate` est elle aussi appelée à chaque changement de props, donc on vérifie ici aussi
 * s'il faut actualiser ou non l'affichage (est-ce que work a été remis à null ?). Si oui, on charge le projet
 * depuis l'API.
 */

export default class Work extends Component {
  state = {
    loading: true,
    work: null,
    otherWorks: [],
    prevWorkId: null
  }

  static getDerivedStateFromProps = (props, state) => {
    // Store prevWorkId in state so we can compare when props change.
    // Clear out previously-loaded work (so we don't render stale stuff).
    if (props.match.params.work !== state.prevWorkId) {
      return {
        loading: true,
        work: null,
        prevWorkId: props.match.params.work
      }
    }
    return null
  }

  componentDidMount = () => {
    const { work: workId } = this.props.match.params
    this.setState({
      loading: true
    })

    this.loadWork(workId)
  }

  componentDidUpdate = (prevProps, prevState) => {
    // We received props, should we load the new project?
    if (this.state.work === null) {
      this.loadWork(this.props.match.params.work)
    }
  }

  loadWork = workId => {
    fetch(`https://kael.now.sh/works/${workId}`)
      .then(res => res.json())
      .then(
        work =>
          workId === this.props.match.params.work
            ? this.setState({ work })
            : null
      )
      .then(() => fetch(`https://kael.now.sh/works?&id_ne=${workId}`))
      .then(res => res.json())
      .then(
        others =>
          workId === this.props.match.params.work
            ? this.setState({ otherWorks: others, loading: false })
            : null
      )
  }

  render() {
    const { loading, work, otherWorks } = this.state

    if (loading) {
      return <Loader />
    } else {
      return (
        <WorkWidget>
          <Link to={`/`} className="back"> Back to home </Link>
          <WorkDetail work={work || {}} />
          <OtherWorks>
            {otherWorks.map(otherWork => (
              <WorkCard key={otherWork.id} work={otherWork} />
            ))}
          </OtherWorks>
        </WorkWidget>
      )
    }
  }
}
