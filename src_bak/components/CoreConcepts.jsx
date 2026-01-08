
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section>
          <h2>Core Concepts of React</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} key={concept.title} />
            ))}
          </ul>
        </section>
    );
}