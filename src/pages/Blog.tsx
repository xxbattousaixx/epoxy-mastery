import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import metallicEpoxy1 from '@/assets/gallery/metallic-epoxy-1.jpg';
import industrialFloor1 from '@/assets/gallery/industrial-floor-1.jpg';
import flakeFloor1 from '@/assets/gallery/flake-floor-1.jpg';
import countertop1 from '@/assets/gallery/countertop-1.jpg';
import garageFloor1 from '@/assets/gallery/garage-floor-1.jpg';
import installation1 from '@/assets/gallery/installation-1.jpg';
import bathroomFloor1 from '@/assets/gallery/bathroom-floor-1.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();

  const blogPosts = [
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
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-gold transition-all duration-300"
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
    </Layout>
  );
};

export default Blog;
