import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, X } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import metallicEpoxy1 from '@/assets/gallery/metallic-epoxy-1.jpg';
import industrialFloor1 from '@/assets/gallery/industrial-floor-1.jpg';
import flakeFloor1 from '@/assets/gallery/flake-floor-1.jpg';
import countertop1 from '@/assets/gallery/countertop-1.jpg';
import garageFloor1 from '@/assets/gallery/garage-floor-1.jpg';
import installation1 from '@/assets/gallery/installation-1.jpg';
import bathroomFloor1 from '@/assets/gallery/bathroom-floor-1.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';

interface BlogPost {
  id: number;
  slug: string;
  title: { en: string; es: string; zh: string };
  excerpt: { en: string; es: string; zh: string };
  content: { en: string; es: string; zh: string };
  image: string;
  category: string;
  date: string;
  readTime: number;
}

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'ultimate-guide-epoxy-flooring',
      title: {
        en: 'The Ultimate Guide to Epoxy Flooring: Everything You Need to Know',
        es: 'La Guía Definitiva de Pisos Epóxicos: Todo lo que Necesitas Saber',
        zh: '环氧地板终极指南：您需要了解的一切'
      },
      excerpt: {
        en: 'Discover the benefits, types, and installation process of epoxy flooring. Learn why epoxy is the preferred choice for residential and commercial spaces.',
        es: 'Descubra los beneficios, tipos y proceso de instalación de pisos epóxicos. Aprenda por qué el epóxico es la opción preferida para espacios residenciales y comerciales.',
        zh: '了解环氧地板的优点、类型和安装过程。了解为什么环氧树脂是住宅和商业空间的首选。'
      },
      content: {
        en: `<h2>What is Epoxy Flooring?</h2>
<p>Epoxy flooring is a surface coating made from a combination of resins and hardeners that, when mixed together, chemically react to form a rigid plastic material. This material is strong, durable, and bonds exceptionally well to most base layers.</p>

<h2>Benefits of Epoxy Flooring</h2>
<ul>
<li><strong>Durability:</strong> Epoxy floors can last 15-20 years with proper maintenance</li>
<li><strong>Chemical Resistance:</strong> Perfect for garages, workshops, and industrial settings</li>
<li><strong>Easy Maintenance:</strong> Seamless surface makes cleaning a breeze</li>
<li><strong>Aesthetic Appeal:</strong> Available in countless colors and patterns</li>
<li><strong>Cost-Effective:</strong> Lower lifetime cost compared to other flooring options</li>
</ul>

<h2>Types of Epoxy Flooring</h2>
<p>There are several types of epoxy flooring systems, each suited for different applications:</p>
<ul>
<li><strong>Self-Leveling Epoxy:</strong> Creates a smooth, seamless surface</li>
<li><strong>Epoxy Mortar:</strong> Strongest epoxy option, ideal for heavy industrial use</li>
<li><strong>Quartz-Filled Epoxy:</strong> Combines decorative quartz with epoxy for durability</li>
<li><strong>Anti-Static Epoxy:</strong> Essential for electronics manufacturing facilities</li>
<li><strong>Flaked Epoxy:</strong> Decorative option with excellent slip resistance</li>
</ul>

<h2>The Installation Process</h2>
<p>Professional epoxy installation involves several critical steps to ensure longevity and performance. Contact EpoxyMasters today to learn more about transforming your space!</p>`,
        es: `<h2>¿Qué es el Piso Epóxico?</h2>
<p>El piso epóxico es un recubrimiento de superficie hecho de una combinación de resinas y endurecedores que, cuando se mezclan, reaccionan químicamente para formar un material plástico rígido. Este material es fuerte, duradero y se adhiere excepcionalmente bien a la mayoría de las capas base.</p>

<h2>Beneficios del Piso Epóxico</h2>
<ul>
<li><strong>Durabilidad:</strong> Los pisos epóxicos pueden durar 15-20 años con el mantenimiento adecuado</li>
<li><strong>Resistencia Química:</strong> Perfecto para garajes, talleres e instalaciones industriales</li>
<li><strong>Fácil Mantenimiento:</strong> La superficie sin juntas hace que la limpieza sea muy fácil</li>
<li><strong>Atractivo Estético:</strong> Disponible en innumerables colores y patrones</li>
<li><strong>Económico:</strong> Menor costo de por vida en comparación con otras opciones de pisos</li>
</ul>

<h2>Tipos de Pisos Epóxicos</h2>
<p>Hay varios tipos de sistemas de pisos epóxicos, cada uno adecuado para diferentes aplicaciones:</p>
<ul>
<li><strong>Epóxico Autonivelante:</strong> Crea una superficie lisa y sin juntas</li>
<li><strong>Mortero Epóxico:</strong> La opción más fuerte, ideal para uso industrial pesado</li>
<li><strong>Epóxico con Cuarzo:</strong> Combina cuarzo decorativo con epóxico para durabilidad</li>
<li><strong>Epóxico Antiestático:</strong> Esencial para instalaciones de fabricación de electrónica</li>
<li><strong>Epóxico con Escamas:</strong> Opción decorativa con excelente resistencia al deslizamiento</li>
</ul>

<h2>El Proceso de Instalación</h2>
<p>La instalación profesional de epóxico involucra varios pasos críticos para asegurar longevidad y rendimiento. ¡Contacte a EpoxyMasters hoy para aprender más sobre la transformación de su espacio!</p>`,
        zh: `<h2>什么是环氧地板？</h2>
<p>环氧地板是一种由树脂和固化剂混合而成的表面涂层，当混合在一起时，会发生化学反应形成刚性塑料材料。这种材料坚固、耐用，与大多数基层粘合性极佳。</p>

<h2>环氧地板的优势</h2>
<ul>
<li><strong>耐用性：</strong>环氧地板在适当维护下可使用15-20年</li>
<li><strong>耐化学性：</strong>非常适合车库、车间和工业环境</li>
<li><strong>易于维护：</strong>无缝表面使清洁变得轻松</li>
<li><strong>美观：</strong>有无数种颜色和图案可供选择</li>
<li><strong>经济实惠：</strong>与其他地板选择相比，终身成本更低</li>
</ul>

<h2>环氧地板的类型</h2>
<p>环氧地板系统有几种类型，每种都适合不同的应用：</p>
<ul>
<li><strong>自流平环氧：</strong>创建光滑无缝的表面</li>
<li><strong>环氧砂浆：</strong>最强的环氧选择，适合重工业使用</li>
<li><strong>石英填充环氧：</strong>将装饰性石英与环氧结合，增加耐久性</li>
<li><strong>防静电环氧：</strong>电子制造设施必备</li>
<li><strong>片状环氧：</strong>具有出色防滑性的装饰选择</li>
</ul>

<h2>安装过程</h2>
<p>专业的环氧安装涉及几个关键步骤，以确保其使用寿命和性能。今天就联系EpoxyMasters，了解更多关于改造您空间的信息！</p>`
      },
      image: metallicEpoxy1,
      category: 'guides',
      date: '2024-01-15',
      readTime: 8,
    },
    {
      id: 2,
      slug: 'metallic-epoxy-trends-2024',
      title: {
        en: 'Metallic Epoxy Trends for 2024: What\'s Hot in Floor Design',
        es: 'Tendencias de Epóxico Metálico 2024: Lo Más Nuevo en Diseño de Pisos',
        zh: '2024年金属环氧趋势：地板设计热点'
      },
      excerpt: {
        en: 'Explore the latest metallic epoxy trends including 3D effects, custom color combinations, and innovative application techniques that are transforming spaces.',
        es: 'Explore las últimas tendencias en epóxico metálico incluyendo efectos 3D, combinaciones de colores personalizados y técnicas innovadoras de aplicación.',
        zh: '探索最新的金属环氧趋势，包括3D效果、自定义颜色组合和创新的应用技术。'
      },
      content: {
        en: `<h2>The Rise of Metallic Epoxy</h2>
<p>Metallic epoxy flooring has become one of the most sought-after design trends in both residential and commercial spaces. The unique 3D effects and flowing patterns create truly one-of-a-kind floors.</p>

<h2>Top Trends for 2024</h2>
<ul>
<li><strong>Ocean Wave Effects:</strong> Blue and teal combinations mimicking ocean waves</li>
<li><strong>Lava Flow Patterns:</strong> Dramatic reds, oranges, and blacks</li>
<li><strong>Galaxy Floors:</strong> Deep purples with metallic silver accents</li>
<li><strong>Marble Alternatives:</strong> White and gray metallic that resembles natural marble</li>
<li><strong>Copper and Bronze:</strong> Warm metallic tones for rustic-modern spaces</li>
</ul>

<h2>Application Techniques</h2>
<p>The magic of metallic epoxy lies in the application technique. Our skilled technicians use specialized tools and methods to create these stunning effects.</p>

<h2>Perfect Spaces for Metallic Epoxy</h2>
<ul>
<li>Showrooms and retail spaces</li>
<li>Restaurants and bars</li>
<li>Residential living areas</li>
<li>Home basements and entertainment rooms</li>
<li>Commercial lobbies</li>
</ul>`,
        es: `<h2>El Auge del Epóxico Metálico</h2>
<p>El piso epóxico metálico se ha convertido en una de las tendencias de diseño más buscadas tanto en espacios residenciales como comerciales. Los efectos 3D únicos y los patrones fluidos crean pisos verdaderamente únicos.</p>

<h2>Tendencias Principales para 2024</h2>
<ul>
<li><strong>Efectos de Olas del Océano:</strong> Combinaciones de azul y turquesa que imitan las olas del mar</li>
<li><strong>Patrones de Flujo de Lava:</strong> Rojos, naranjas y negros dramáticos</li>
<li><strong>Pisos Galaxia:</strong> Púrpuras profundos con acentos plateados metálicos</li>
<li><strong>Alternativas al Mármol:</strong> Metálico blanco y gris que se asemeja al mármol natural</li>
<li><strong>Cobre y Bronce:</strong> Tonos metálicos cálidos para espacios rústico-modernos</li>
</ul>

<h2>Técnicas de Aplicación</h2>
<p>La magia del epóxico metálico radica en la técnica de aplicación. Nuestros técnicos especializados utilizan herramientas y métodos especializados para crear estos efectos impresionantes.</p>

<h2>Espacios Perfectos para Epóxico Metálico</h2>
<ul>
<li>Salas de exposición y espacios comerciales</li>
<li>Restaurantes y bares</li>
<li>Áreas de estar residenciales</li>
<li>Sótanos y salas de entretenimiento</li>
<li>Vestíbulos comerciales</li>
</ul>`,
        zh: `<h2>金属环氧的崛起</h2>
<p>金属环氧地板已成为住宅和商业空间中最受追捧的设计趋势之一。独特的3D效果和流动图案创造出真正独一无二的地板。</p>

<h2>2024年热门趋势</h2>
<ul>
<li><strong>海浪效果：</strong>模仿海浪的蓝色和青色组合</li>
<li><strong>熔岩流图案：</strong>戏剧性的红色、橙色和黑色</li>
<li><strong>银河地板：</strong>深紫色配银色金属色调</li>
<li><strong>大理石替代品：</strong>类似天然大理石的白色和灰色金属色</li>
<li><strong>铜和青铜：</strong>适合乡村现代空间的温暖金属色调</li>
</ul>

<h2>应用技术</h2>
<p>金属环氧的魅力在于应用技术。我们的专业技术人员使用专门的工具和方法来创造这些惊人的效果。</p>

<h2>适合金属环氧的空间</h2>
<ul>
<li>展厅和零售空间</li>
<li>餐厅和酒吧</li>
<li>住宅起居区</li>
<li>家庭地下室和娱乐室</li>
<li>商业大堂</li>
</ul>`
      },
      image: industrialFloor1,
      category: 'trends',
      date: '2024-01-10',
      readTime: 6,
    },
    {
      id: 3,
      slug: 'epoxy-maintenance-tips',
      title: {
        en: '10 Essential Maintenance Tips for Your Epoxy Floor',
        es: '10 Consejos Esenciales de Mantenimiento para tu Piso Epóxico',
        zh: '环氧地板的10个基本维护技巧'
      },
      excerpt: {
        en: 'Keep your epoxy floor looking new for years with these professional maintenance tips. From daily cleaning to periodic deep cleaning.',
        es: 'Mantenga su piso epóxico como nuevo durante años con estos consejos profesionales de mantenimiento. Desde limpieza diaria hasta limpieza profunda periódica.',
        zh: '通过这些专业维护技巧，让您的环氧地板多年保持如新。从日常清洁到定期深度清洁。'
      },
      content: {
        en: `<h2>Essential Maintenance Tips</h2>
<ol>
<li><strong>Sweep or Dust Mop Daily:</strong> Remove loose dirt and debris to prevent scratching</li>
<li><strong>Clean Spills Immediately:</strong> Even though epoxy is resistant, prompt cleaning prevents staining</li>
<li><strong>Use pH-Neutral Cleaners:</strong> Avoid harsh chemicals that can damage the finish</li>
<li><strong>Mop Weekly:</strong> Use a soft mop with diluted ammonia or epoxy-safe cleaner</li>
<li><strong>Avoid Abrasive Tools:</strong> No steel wool or hard-bristle brushes</li>
<li><strong>Place Mats at Entrances:</strong> Reduce dirt and grit being tracked onto the floor</li>
<li><strong>Use Furniture Pads:</strong> Protect from scratches when moving furniture</li>
<li><strong>Avoid Hot Tire Contact:</strong> In garages, use tire mats to prevent marks</li>
<li><strong>Deep Clean Quarterly:</strong> Use an auto floor scrubber for larger areas</li>
<li><strong>Inspect Annually:</strong> Check for wear, scratches, or areas needing touch-up</li>
</ol>

<h2>Products to Avoid</h2>
<ul>
<li>Citrus-based cleaners (can break down the epoxy)</li>
<li>Soap-based cleaners (leave residue)</li>
<li>Vinegar (too acidic)</li>
<li>Steel wool or abrasive pads</li>
</ul>`,
        es: `<h2>Consejos Esenciales de Mantenimiento</h2>
<ol>
<li><strong>Barre o Trapea Diariamente:</strong> Elimina la suciedad suelta para prevenir rayones</li>
<li><strong>Limpia Derrames Inmediatamente:</strong> Aunque el epóxico es resistente, la limpieza rápida previene manchas</li>
<li><strong>Usa Limpiadores de pH Neutro:</strong> Evita químicos agresivos que pueden dañar el acabado</li>
<li><strong>Trapea Semanalmente:</strong> Usa un trapeador suave con amoníaco diluido o limpiador seguro para epóxico</li>
<li><strong>Evita Herramientas Abrasivas:</strong> Nada de lana de acero o cepillos de cerdas duras</li>
<li><strong>Coloca Tapetes en las Entradas:</strong> Reduce la suciedad que se lleva al piso</li>
<li><strong>Usa Protectores de Muebles:</strong> Protege de rayones al mover muebles</li>
<li><strong>Evita el Contacto con Llantas Calientes:</strong> En garajes, usa tapetes para llantas</li>
<li><strong>Limpieza Profunda Trimestral:</strong> Usa una fregadora automática para áreas grandes</li>
<li><strong>Inspecciona Anualmente:</strong> Revisa desgaste, rayones o áreas que necesiten retoque</li>
</ol>

<h2>Productos a Evitar</h2>
<ul>
<li>Limpiadores a base de cítricos (pueden descomponer el epóxico)</li>
<li>Limpiadores a base de jabón (dejan residuos)</li>
<li>Vinagre (muy ácido)</li>
<li>Lana de acero o esponjas abrasivas</li>
</ul>`,
        zh: `<h2>基本维护技巧</h2>
<ol>
<li><strong>每天扫地或除尘：</strong>清除松散的污垢和碎屑以防止刮擦</li>
<li><strong>立即清理溢出物：</strong>尽管环氧树脂具有抗性，但及时清洁可防止染色</li>
<li><strong>使用中性pH清洁剂：</strong>避免使用可能损坏表面的刺激性化学品</li>
<li><strong>每周拖地：</strong>使用软拖把和稀释的氨水或环氧安全清洁剂</li>
<li><strong>避免使用研磨工具：</strong>不要使用钢丝绒或硬毛刷</li>
<li><strong>在入口处放置地垫：</strong>减少带入地板的污垢</li>
<li><strong>使用家具垫：</strong>移动家具时防止刮擦</li>
<li><strong>避免热轮胎接触：</strong>在车库中，使用轮胎垫防止印记</li>
<li><strong>每季度深度清洁：</strong>对于较大区域使用自动地板洗涤器</li>
<li><strong>每年检查：</strong>检查磨损、刮擦或需要修补的区域</li>
</ol>

<h2>避免使用的产品</h2>
<ul>
<li>柑橘类清洁剂（可能分解环氧树脂）</li>
<li>肥皂类清洁剂（留下残留物）</li>
<li>醋（太酸）</li>
<li>钢丝绒或研磨垫</li>
</ul>`
      },
      image: flakeFloor1,
      category: 'maintenance',
      date: '2024-01-05',
      readTime: 5,
    },
    {
      id: 4,
      slug: 'epoxy-vs-polyaspartic',
      title: {
        en: 'Epoxy vs Polyaspartic: Which Floor Coating is Right for You?',
        es: 'Epóxico vs Poliaspártico: ¿Qué Recubrimiento es el Adecuado para Ti?',
        zh: '环氧vs聚天门冬酸：哪种地板涂层适合您？'
      },
      excerpt: {
        en: 'Compare the pros and cons of epoxy and polyaspartic coatings. Learn about cure times, durability, UV stability, and cost differences.',
        es: 'Compare los pros y contras de los recubrimientos epóxicos y poliaspárticos. Conozca los tiempos de curado, durabilidad, estabilidad UV y diferencias de costo.',
        zh: '比较环氧和聚天门冬酸涂层的优缺点。了解固化时间、耐久性、紫外线稳定性和成本差异。'
      },
      content: {
        en: `<h2>Understanding the Differences</h2>
<p>Both epoxy and polyaspartic coatings are excellent choices for floor protection, but they have distinct characteristics that make each better suited for different situations.</p>

<h2>Epoxy Flooring</h2>
<h3>Pros:</h3>
<ul>
<li>More affordable upfront cost</li>
<li>Thicker build for better protection</li>
<li>Wide range of colors and effects</li>
<li>Excellent chemical resistance</li>
</ul>
<h3>Cons:</h3>
<ul>
<li>Longer cure time (24-72 hours)</li>
<li>Can yellow with UV exposure</li>
<li>Temperature sensitive during installation</li>
</ul>

<h2>Polyaspartic Coating</h2>
<h3>Pros:</h3>
<ul>
<li>Rapid cure time (4-6 hours)</li>
<li>UV stable - won't yellow</li>
<li>Can be applied in extreme temperatures</li>
<li>Superior abrasion resistance</li>
</ul>
<h3>Cons:</h3>
<ul>
<li>Higher cost</li>
<li>Requires experienced installers</li>
<li>Less working time during application</li>
</ul>

<h2>Our Recommendation</h2>
<p>For most residential applications, we recommend a hybrid system: epoxy base coat with a polyaspartic topcoat for the best of both worlds.</p>`,
        es: `<h2>Entendiendo las Diferencias</h2>
<p>Tanto los recubrimientos epóxicos como los poliaspárticos son excelentes opciones para la protección de pisos, pero tienen características distintas que hacen que cada uno sea más adecuado para diferentes situaciones.</p>

<h2>Piso Epóxico</h2>
<h3>Ventajas:</h3>
<ul>
<li>Costo inicial más asequible</li>
<li>Mayor espesor para mejor protección</li>
<li>Amplia gama de colores y efectos</li>
<li>Excelente resistencia química</li>
</ul>
<h3>Desventajas:</h3>
<ul>
<li>Mayor tiempo de curado (24-72 horas)</li>
<li>Puede amarillear con exposición UV</li>
<li>Sensible a la temperatura durante la instalación</li>
</ul>

<h2>Recubrimiento Poliaspártico</h2>
<h3>Ventajas:</h3>
<ul>
<li>Tiempo de curado rápido (4-6 horas)</li>
<li>Estable a UV - no amarillea</li>
<li>Se puede aplicar en temperaturas extremas</li>
<li>Resistencia superior a la abrasión</li>
</ul>
<h3>Desventajas:</h3>
<ul>
<li>Mayor costo</li>
<li>Requiere instaladores experimentados</li>
<li>Menos tiempo de trabajo durante la aplicación</li>
</ul>

<h2>Nuestra Recomendación</h2>
<p>Para la mayoría de aplicaciones residenciales, recomendamos un sistema híbrido: capa base de epóxico con acabado poliaspártico para lo mejor de ambos mundos.</p>`,
        zh: `<h2>了解差异</h2>
<p>环氧和聚天门冬酸涂层都是地板保护的绝佳选择，但它们具有不同的特性，使每种涂层更适合不同的情况。</p>

<h2>环氧地板</h2>
<h3>优点：</h3>
<ul>
<li>前期成本更实惠</li>
<li>更厚的涂层提供更好的保护</li>
<li>颜色和效果范围广泛</li>
<li>出色的耐化学性</li>
</ul>
<h3>缺点：</h3>
<ul>
<li>固化时间较长（24-72小时）</li>
<li>紫外线照射下可能变黄</li>
<li>安装时对温度敏感</li>
</ul>

<h2>聚天门冬酸涂层</h2>
<h3>优点：</h3>
<ul>
<li>快速固化时间（4-6小时）</li>
<li>抗紫外线 - 不会变黄</li>
<li>可在极端温度下施工</li>
<li>出色的耐磨性</li>
</ul>
<h3>缺点：</h3>
<ul>
<li>成本较高</li>
<li>需要经验丰富的安装人员</li>
<li>施工时工作时间较短</li>
</ul>

<h2>我们的建议</h2>
<p>对于大多数住宅应用，我们推荐混合系统：环氧底涂层配聚天门冬酸面涂层，兼具两者优势。</p>`
      },
      image: garageFloor1,
      category: 'guides',
      date: '2023-12-28',
      readTime: 7,
    },
    {
      id: 5,
      slug: 'garage-floor-transformation',
      title: {
        en: 'Transform Your Garage in 3 Days: A Complete Guide',
        es: 'Transforma tu Garaje en 3 Días: Una Guía Completa',
        zh: '3天改造您的车库：完整指南'
      },
      excerpt: {
        en: 'Step-by-step guide to transforming your garage floor with epoxy. Includes preparation tips, color selection, and what to expect during installation.',
        es: 'Guía paso a paso para transformar el piso de tu garaje con epóxico. Incluye consejos de preparación, selección de colores y qué esperar durante la instalación.',
        zh: '使用环氧树脂改造车库地板的分步指南。包括准备技巧、颜色选择和安装期间的注意事项。'
      },
      content: {
        en: `<h2>Day 1: Preparation</h2>
<p>The key to a long-lasting epoxy floor is proper preparation. On the first day, our team will:</p>
<ul>
<li>Clear the garage completely</li>
<li>Repair all cracks and chips</li>
<li>Diamond grind the entire surface</li>
<li>Clean and vacuum thoroughly</li>
</ul>

<h2>Day 2: Application</h2>
<p>This is where the transformation happens:</p>
<ul>
<li>Apply penetrating primer</li>
<li>Apply base coat of epoxy</li>
<li>Add decorative flakes or metallic effects</li>
<li>Allow initial cure</li>
</ul>

<h2>Day 3: Finishing</h2>
<p>The final touches make all the difference:</p>
<ul>
<li>Apply topcoat for protection</li>
<li>Final inspection</li>
<li>Light foot traffic OK after 24 hours</li>
<li>Full cure for vehicle traffic: 72 hours</li>
</ul>

<h2>Choosing Your Style</h2>
<p>We offer various options: solid colors, flake systems, or metallic effects. Our design team can help you choose the perfect look for your space.</p>`,
        es: `<h2>Día 1: Preparación</h2>
<p>La clave para un piso epóxico duradero es la preparación adecuada. El primer día, nuestro equipo:</p>
<ul>
<li>Despejará el garaje completamente</li>
<li>Reparará todas las grietas y astillas</li>
<li>Pulirá con diamante toda la superficie</li>
<li>Limpiará y aspirará a fondo</li>
</ul>

<h2>Día 2: Aplicación</h2>
<p>Aquí es donde ocurre la transformación:</p>
<ul>
<li>Aplicar primer penetrante</li>
<li>Aplicar capa base de epóxico</li>
<li>Agregar escamas decorativas o efectos metálicos</li>
<li>Permitir el curado inicial</li>
</ul>

<h2>Día 3: Acabado</h2>
<p>Los toques finales hacen toda la diferencia:</p>
<ul>
<li>Aplicar capa superior para protección</li>
<li>Inspección final</li>
<li>Tránsito peatonal ligero OK después de 24 horas</li>
<li>Curado completo para tráfico de vehículos: 72 horas</li>
</ul>

<h2>Eligiendo Tu Estilo</h2>
<p>Ofrecemos varias opciones: colores sólidos, sistemas de escamas o efectos metálicos. Nuestro equipo de diseño puede ayudarte a elegir el look perfecto para tu espacio.</p>`,
        zh: `<h2>第1天：准备工作</h2>
<p>持久环氧地板的关键是适当的准备。第一天，我们的团队将：</p>
<ul>
<li>完全清空车库</li>
<li>修复所有裂缝和碎片</li>
<li>用金刚石研磨整个表面</li>
<li>彻底清洁和吸尘</li>
</ul>

<h2>第2天：施工</h2>
<p>这是转变发生的地方：</p>
<ul>
<li>涂抹渗透底漆</li>
<li>涂抹环氧底涂层</li>
<li>添加装饰性碎片或金属效果</li>
<li>允许初步固化</li>
</ul>

<h2>第3天：完成</h2>
<p>最后的润色使一切不同：</p>
<ul>
<li>涂抹保护性面涂层</li>
<li>最终检查</li>
<li>24小时后可轻度步行</li>
<li>车辆通行完全固化：72小时</li>
</ul>

<h2>选择您的风格</h2>
<p>我们提供多种选择：纯色、片状系统或金属效果。我们的设计团队可以帮助您为您的空间选择完美的外观。</p>`
      },
      image: installation1,
      category: 'guides',
      date: '2023-12-20',
      readTime: 10,
    },
    {
      id: 6,
      slug: 'epoxy-countertops-kitchen',
      title: {
        en: 'Epoxy Countertops: A Beautiful Alternative for Your Kitchen',
        es: 'Mesones de Epóxico: Una Hermosa Alternativa para tu Cocina',
        zh: '环氧台面：厨房的美丽选择'
      },
      excerpt: {
        en: 'Discover how epoxy countertops can give your kitchen a stunning makeover. Explore design options, durability, and cost comparisons with granite and marble.',
        es: 'Descubra cómo los mesones de epóxico pueden darle a tu cocina una renovación impresionante. Explore opciones de diseño, durabilidad y comparaciones de costos.',
        zh: '了解环氧台面如何为您的厨房带来惊艳的改造。探索设计选项、耐久性以及与花岗岩和大理石的成本比较。'
      },
      content: {
        en: `<h2>Why Choose Epoxy Countertops?</h2>
<p>Epoxy countertops offer a unique combination of beauty, durability, and customization that traditional materials can't match.</p>

<h2>Design Possibilities</h2>
<ul>
<li><strong>Marble Look:</strong> Achieve the elegance of marble at a fraction of the cost</li>
<li><strong>Ocean Waves:</strong> Stunning blue swirls for a coastal vibe</li>
<li><strong>Galaxy Effect:</strong> Deep colors with metallic highlights</li>
<li><strong>Custom Colors:</strong> Match any décor perfectly</li>
</ul>

<h2>Benefits Over Traditional Materials</h2>
<ul>
<li>Seamless installation - no visible seams</li>
<li>Heat resistant up to 350°F</li>
<li>Non-porous - won't stain like granite</li>
<li>Completely customizable</li>
<li>More affordable than natural stone</li>
</ul>

<h2>Care and Maintenance</h2>
<p>Epoxy countertops are incredibly easy to maintain. Simply clean with mild soap and water. Avoid placing extremely hot pots directly on the surface.</p>`,
        es: `<h2>¿Por Qué Elegir Mesones de Epóxico?</h2>
<p>Los mesones de epóxico ofrecen una combinación única de belleza, durabilidad y personalización que los materiales tradicionales no pueden igualar.</p>

<h2>Posibilidades de Diseño</h2>
<ul>
<li><strong>Aspecto de Mármol:</strong> Logra la elegancia del mármol a una fracción del costo</li>
<li><strong>Olas del Océano:</strong> Impresionantes remolinos azules para un ambiente costero</li>
<li><strong>Efecto Galaxia:</strong> Colores profundos con reflejos metálicos</li>
<li><strong>Colores Personalizados:</strong> Combina perfectamente con cualquier decoración</li>
</ul>

<h2>Beneficios Sobre Materiales Tradicionales</h2>
<ul>
<li>Instalación sin juntas - sin costuras visibles</li>
<li>Resistente al calor hasta 175°C</li>
<li>No poroso - no se mancha como el granito</li>
<li>Completamente personalizable</li>
<li>Más asequible que la piedra natural</li>
</ul>

<h2>Cuidado y Mantenimiento</h2>
<p>Los mesones de epóxico son increíblemente fáciles de mantener. Simplemente limpia con jabón suave y agua. Evita colocar ollas extremadamente calientes directamente sobre la superficie.</p>`,
        zh: `<h2>为什么选择环氧台面？</h2>
<p>环氧台面提供了传统材料无法比拟的美观、耐用和定制的独特组合。</p>

<h2>设计可能性</h2>
<ul>
<li><strong>大理石外观：</strong>以极低的成本实现大理石的优雅</li>
<li><strong>海洋波浪：</strong>令人惊叹的蓝色漩涡带来海岸氛围</li>
<li><strong>银河效果：</strong>深色配金属亮点</li>
<li><strong>自定义颜色：</strong>完美匹配任何装饰</li>
</ul>

<h2>相对传统材料的优势</h2>
<ul>
<li>无缝安装 - 没有可见接缝</li>
<li>耐热可达175°C</li>
<li>无孔隙 - 不会像花岗岩那样染色</li>
<li>完全可定制</li>
<li>比天然石材更实惠</li>
</ul>

<h2>护理和维护</h2>
<p>环氧台面非常容易维护。只需用温和的肥皂和水清洁。避免将极热的锅直接放在表面上。</p>`
      },
      image: countertop1,
      category: 'tips',
      date: '2023-12-15',
      readTime: 6,
    },
    {
      id: 7,
      slug: 'commercial-epoxy-benefits',
      title: {
        en: 'Why Commercial Spaces Choose Epoxy Flooring',
        es: 'Por Qué los Espacios Comerciales Eligen Pisos Epóxicos',
        zh: '为什么商业空间选择环氧地板'
      },
      excerpt: {
        en: 'Learn why warehouses, restaurants, hospitals, and retail stores prefer epoxy flooring. Safety, durability, and cost-effectiveness explained.',
        es: 'Aprenda por qué almacenes, restaurantes, hospitales y tiendas prefieren pisos epóxicos. Seguridad, durabilidad y rentabilidad explicadas.',
        zh: '了解为什么仓库、餐厅、医院和零售店更喜欢环氧地板。安全性、耐久性和成本效益解释。'
      },
      content: {
        en: `<h2>Commercial Epoxy Solutions</h2>
<p>Commercial spaces have unique flooring requirements that epoxy meets exceptionally well.</p>

<h2>Industries We Serve</h2>
<ul>
<li><strong>Warehouses:</strong> Heavy equipment resistance, easy maintenance</li>
<li><strong>Restaurants:</strong> Slip-resistant, easy to sanitize</li>
<li><strong>Healthcare:</strong> Seamless, antimicrobial options</li>
<li><strong>Retail:</strong> Attractive, durable, customizable</li>
<li><strong>Automotive:</strong> Chemical and oil resistant</li>
</ul>

<h2>Key Benefits for Business</h2>
<ul>
<li>Reduced maintenance costs</li>
<li>Improved safety with non-slip options</li>
<li>Enhanced lighting reflection</li>
<li>Long-term durability (15-20 years)</li>
<li>Fast installation minimizes downtime</li>
</ul>

<h2>ROI Analysis</h2>
<p>When comparing total cost of ownership, epoxy flooring consistently outperforms alternatives like VCT, polished concrete, and carpet in commercial settings.</p>`,
        es: `<h2>Soluciones Comerciales de Epóxico</h2>
<p>Los espacios comerciales tienen requisitos únicos de pisos que el epóxico satisface excepcionalmente bien.</p>

<h2>Industrias que Atendemos</h2>
<ul>
<li><strong>Almacenes:</strong> Resistencia a equipos pesados, fácil mantenimiento</li>
<li><strong>Restaurantes:</strong> Antideslizante, fácil de sanitizar</li>
<li><strong>Salud:</strong> Sin juntas, opciones antimicrobianas</li>
<li><strong>Retail:</strong> Atractivo, duradero, personalizable</li>
<li><strong>Automotriz:</strong> Resistente a químicos y aceite</li>
</ul>

<h2>Beneficios Clave para Negocios</h2>
<ul>
<li>Costos de mantenimiento reducidos</li>
<li>Seguridad mejorada con opciones antideslizantes</li>
<li>Mejor reflexión de iluminación</li>
<li>Durabilidad a largo plazo (15-20 años)</li>
<li>Instalación rápida minimiza tiempo de inactividad</li>
</ul>

<h2>Análisis de ROI</h2>
<p>Al comparar el costo total de propiedad, el piso epóxico supera consistentemente a alternativas como VCT, concreto pulido y alfombra en entornos comerciales.</p>`,
        zh: `<h2>商业环氧解决方案</h2>
<p>商业空间有独特的地板要求，环氧树脂可以出色地满足。</p>

<h2>我们服务的行业</h2>
<ul>
<li><strong>仓库：</strong>耐重型设备，易于维护</li>
<li><strong>餐厅：</strong>防滑，易于消毒</li>
<li><strong>医疗：</strong>无缝，抗菌选项</li>
<li><strong>零售：</strong>美观，耐用，可定制</li>
<li><strong>汽车：</strong>耐化学品和油</li>
</ul>

<h2>商业的关键优势</h2>
<ul>
<li>降低维护成本</li>
<li>通过防滑选项提高安全性</li>
<li>增强照明反射</li>
<li>长期耐用性（15-20年）</li>
<li>快速安装最大限度减少停机时间</li>
</ul>

<h2>投资回报分析</h2>
<p>在比较总拥有成本时，环氧地板在商业环境中始终优于VCT、抛光混凝土和地毯等替代品。</p>`
      },
      image: bathroomFloor1,
      category: 'tips',
      date: '2023-12-10',
      readTime: 5,
    },
    {
      id: 8,
      slug: 'diy-vs-professional-epoxy',
      title: {
        en: 'DIY vs Professional Epoxy Installation: What\'s the Difference?',
        es: 'Instalación DIY vs Profesional: ¿Cuál es la Diferencia?',
        zh: 'DIY与专业环氧安装：有什么区别？'
      },
      excerpt: {
        en: 'Should you DIY your epoxy floor or hire a professional? We break down the costs, quality differences, and when professional installation is worth it.',
        es: '¿Deberías hacer tu piso epóxico tú mismo o contratar a un profesional? Analizamos los costos, diferencias de calidad y cuándo vale la pena la instalación profesional.',
        zh: '您应该自己DIY环氧地板还是聘请专业人员？我们分析成本、质量差异以及何时专业安装物有所值。'
      },
      content: {
        en: `<h2>The DIY Approach</h2>
<h3>Pros:</h3>
<ul>
<li>Lower upfront cost</li>
<li>Satisfaction of doing it yourself</li>
<li>Flexible timeline</li>
</ul>
<h3>Cons:</h3>
<ul>
<li>Limited material options</li>
<li>No professional surface preparation</li>
<li>Higher risk of failure</li>
<li>No warranty</li>
</ul>

<h2>Professional Installation</h2>
<h3>What You Get:</h3>
<ul>
<li>Diamond grinding surface preparation</li>
<li>Commercial-grade materials</li>
<li>Expert application techniques</li>
<li>Warranty coverage</li>
<li>Predictable, professional results</li>
</ul>

<h2>Cost Comparison</h2>
<p>While DIY kits cost $50-100 for a single-car garage, professional installation runs $1,500-3,000. However, DIY floors often fail within 2-3 years, requiring costly repairs or replacement.</p>

<h2>Our Verdict</h2>
<p>For permanent, long-lasting results, professional installation is the smart investment. Contact us for a free quote!</p>`,
        es: `<h2>El Enfoque DIY</h2>
<h3>Ventajas:</h3>
<ul>
<li>Menor costo inicial</li>
<li>Satisfacción de hacerlo tú mismo</li>
<li>Cronograma flexible</li>
</ul>
<h3>Desventajas:</h3>
<ul>
<li>Opciones de materiales limitadas</li>
<li>Sin preparación profesional de superficie</li>
<li>Mayor riesgo de fallo</li>
<li>Sin garantía</li>
</ul>

<h2>Instalación Profesional</h2>
<h3>Lo Que Obtienes:</h3>
<ul>
<li>Preparación de superficie con pulido de diamante</li>
<li>Materiales de grado comercial</li>
<li>Técnicas de aplicación expertas</li>
<li>Cobertura de garantía</li>
<li>Resultados predecibles y profesionales</li>
</ul>

<h2>Comparación de Costos</h2>
<p>Mientras que los kits DIY cuestan $50-100 para un garaje de un auto, la instalación profesional va de $1,500-3,000. Sin embargo, los pisos DIY a menudo fallan en 2-3 años, requiriendo costosas reparaciones o reemplazo.</p>

<h2>Nuestro Veredicto</h2>
<p>Para resultados permanentes y duraderos, la instalación profesional es la inversión inteligente. ¡Contáctanos para una cotización gratis!</p>`,
        zh: `<h2>DIY方法</h2>
<h3>优点：</h3>
<ul>
<li>前期成本较低</li>
<li>自己动手的满足感</li>
<li>灵活的时间表</li>
</ul>
<h3>缺点：</h3>
<ul>
<li>材料选择有限</li>
<li>没有专业的表面准备</li>
<li>失败风险更高</li>
<li>没有保修</li>
</ul>

<h2>专业安装</h2>
<h3>您获得的：</h3>
<ul>
<li>金刚石研磨表面准备</li>
<li>商业级材料</li>
<li>专业应用技术</li>
<li>保修覆盖</li>
<li>可预测的专业结果</li>
</ul>

<h2>成本比较</h2>
<p>虽然DIY套件单车车库成本为50-100美元，但专业安装为1,500-3,000美元。然而，DIY地板通常在2-3年内失败，需要昂贵的维修或更换。</p>

<h2>我们的结论</h2>
<p>对于永久、持久的效果，专业安装是明智的投资。联系我们获取免费报价！</p>`
      },
      image: residentialFloor1,
      category: 'guides',
      date: '2023-12-05',
      readTime: 8,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      guides: 'bg-blue-500/10 text-blue-500',
      trends: 'bg-pink-500/10 text-pink-500',
      maintenance: 'bg-green-500/10 text-green-500',
      tips: 'bg-amber-500/10 text-amber-500',
    };
    return colors[category] || 'bg-primary/10 text-primary';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const currentLang = i18n.language as 'en' | 'es' | 'zh';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 pt-40 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('blog.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-gold transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {t(`blog.categories.${post.category}`)}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} {t('blog.minRead')}
                    </span>
                  </div>
                  
                  <h2 className="font-display font-semibold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title[currentLang]}
                  </h2>
                  
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt[currentLang]}
                  </p>
                  
                  <Button variant="link" className="p-0 h-auto text-primary">
                    {t('blog.readMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title[currentLang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(selectedPost.category)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {t(`blog.categories.${selectedPost.category}`)}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedPost.readTime} {t('blog.minRead')}
                  </span>
                </div>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold">
                  {selectedPost.title[currentLang]}
                </DialogTitle>
              </DialogHeader>
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content[currentLang] }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Blog;
