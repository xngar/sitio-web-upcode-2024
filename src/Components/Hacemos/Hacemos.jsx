import React from "react";
import "./Hacemos.css";
import ImgHacemos from "../../image/img-que-hacemos.png";

const Hacemos = ({ motion }) => {
  return (
    <div className="hacemos" id="Hacemos">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hacemos-top"
      >
        <h2>¿Qué es lo que hacemos?</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hacemos-bottom"
      >
        <div>
          <div className="hacemos-info">
            <h3>Desarrollo de Aplicaciones Web</h3>
            <p>
              Nuestro servicio de desarrollo Front End se basa en tecnologías
              líderes como React,ofreciendo una
              experiencia de usuario excepcional en todos los dispositivos, ya
              sea en PC, móvil o tablet. Diseñamos y desarrollamos aplicaciones
              con interfaces renovadas y una experiencia de usuario agradable.
              Desde la conceptualización hasta la implementación, nuestro
              enfoque centrado en el usuario garantiza que tus aplicaciones no
              solo sean visualmente atractivas, sino también altamente
              funcionales en cualquier plataforma.
            </p>
          </div>

          <div className="hacemos-info">
            <h3>Desarrollo de Backend y Gestión de Datos</h3>
            <p>
              Nuestro servicio de desarrollo Back End se basa en tecnologías
              avanzadas como ASP.NET 6 o superior, utilizando el lenguaje de
              programación C# y un repositorio SQL Server. Construimos sistemas
              CRM, APIs y más, aprovechando las últimas novedades y herramientas
              para garantizar un rendimiento óptimo en el procesamiento de
              datos. Nuestro enfoque se basa en la seguridad, implementando
              certificados de seguridad como tokens, secret keys y API keys.
              Además, adoptamos los últimos frameworks basados en el concepto
              minimalista para optimizar la eficiencia y escalabilidad de tus
              aplicaciones.
            </p>
          </div>
        </div>
        <div>
          <img src={ImgHacemos} alt="Imagen de Celular" />
        </div>
        <div>
          <div className="hacemos-info">
            <h3>E-Commerce</h3>
            <p>
              Nuestro servicio de integración de pasarelas de pago está diseñado
              para potenciar tu plataforma de comercio electrónico utilizando
              tecnologías como ASP.NET, PHP y JavaScript. Nos especializamos en
              integrar y desarrollar plugins personalizados para tus pasarelas
              de pago preferidas, como Mercado Pago, Transbank, Getnet, entre
              otras. Transforma tu página de productos en una mini tienda
              virtual con capacidad de pago online integrado. Desde la
              configuración inicial hasta la implementación completa, nuestro
              equipo técnico te ofrece soluciones a medida para garantizar una
              experiencia de compra segura y fluida para tus clientes."
            </p>
          </div>

          <div className="hacemos-info">
            <h3>Gestión AWS Cloud</h3>
            <p>
              Nuestro servicio de gestión en la nube de AWS te proporciona una
              administración experta y personalizada de tu infraestructura en la
              plataforma de Amazon Web Services Inc. Nos especializamos en
              optimizar la configuración, supervisar el rendimiento y garantizar
              la seguridad de tus recursos en la nube. Conocemos a fondo la
              amplia gama de servicios y herramientas de AWS, y te asesoramos
              sobre las mejores prácticas para tu proyecto. Desde la
              implementación inicial hasta la escalabilidad futura, nuestro
              equipo técnico te acompaña en cada etapa del viaje hacia una
              infraestructura en la nube eficiente y segura."
            </p>
          </div>

         
        </div>
      </motion.div>
    </div>
  );
};

export default Hacemos;
