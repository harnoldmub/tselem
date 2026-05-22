import { motion } from "framer-motion";

export default function LuxuryManifesto() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-destructive rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-destructive text-sm font-sans font-semibold tracking-[0.2em] uppercase">
              Notre Philosophie
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
            data-testid="heading-manifesto"
          >
            Chaque Pixel Compte
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              number: "01",
              title: "Vision Artistique",
              description: "Nous ne photographions pas simplement des moments, nous créons des œuvres d'art intemporelles qui racontent votre histoire unique avec une sensibilité artistique incomparable.",
            },
            {
              number: "02",
              title: "Excellence Technique",
              description: "Notre maîtrise des dernières technologies photographiques et vidéographiques garantit une qualité irréprochable, du premier clic jusqu'à la livraison finale.",
            },
            {
              number: "03",
              title: "Expérience Sur Mesure",
              description: "Chaque projet est une collaboration personnalisée où vos aspirations deviennent notre obsession créative, pour des résultats qui dépassent vos attentes.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-card-border rounded-lg p-8 h-full hover-elevate transition-all duration-300"
              >
                <div className="text-6xl font-heading font-bold text-destructive/20 mb-4 leading-none">
                  {item.number}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl sm:text-3xl font-sans italic text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Dans chaque image que nous créons, nous capturons l'essence même de l'instant, 
            transformant les émotions fugaces en souvenirs éternels."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
