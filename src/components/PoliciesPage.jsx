import { useState } from 'react'
import { ChevronDown, ChevronUp, Leaf, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function PoliciesPage() {
  const [expandedSections, setExpandedSections] = useState({
    devoluciones: true,
    cancelacion: false,
    satisfaccion: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">GreenPack</h1>
              <p className="text-sm text-gray-600">Políticas de Compra B2B</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Políticas de Compra B2B
          </h2>
          <p className="text-xl md:text-2xl opacity-90">
            Transparencia y confianza en cada transacción
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Policies */}
          <div className="lg:col-span-2">
            {/* Políticas de Devoluciones */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <button
                onClick={() => toggleSection('devoluciones')}
                className="w-full bg-green-600 hover:bg-green-700 text-white p-6 flex items-center justify-between transition-colors"
              >
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Políticas de Devoluciones
                </h3>
                {expandedSections.devoluciones ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {expandedSections.devoluciones && (
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Motivos de Devolución Aceptados</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h5 className="font-bold text-gray-800 mb-2">Defecto de Fabricación o Daño en Tránsito</h5>
                        <p className="text-gray-700 text-sm mb-2">El producto no cumple con las especificaciones de calidad o presenta daños evidentes al momento de la recepción.</p>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Cliente:</p>
                            <p className="text-gray-600">7 días hábiles</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Empresa:</p>
                            <p className="text-gray-600">5 días (recolección) + 10 días (reembolso)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h5 className="font-bold text-gray-800 mb-2">Error de Personalización Atribuible a Green Pack</h5>
                        <p className="text-gray-700 text-sm mb-2">La impresión o el diseño final difiere del arte aprobado previamente por el cliente.</p>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Cliente:</p>
                            <p className="text-gray-600">7 días hábiles</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Empresa:</p>
                            <p className="text-gray-600">15 días (reimpresión y reenvío)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h5 className="font-bold text-gray-800 mb-2">Disconformidad con Producto Estandarizado</h5>
                        <p className="text-gray-700 text-sm mb-2">Aplica exclusivamente a productos sin personalización.</p>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Cliente:</p>
                            <p className="text-gray-600">5 días hábiles</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Plazo Empresa:</p>
                            <p className="text-gray-600">10 días (reembolso o cambio)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      Exclusiones
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• No se aceptarán devoluciones si el error de diseño fue aprobado por el cliente en la maqueta digital.</li>
                      <li>• No se aceptarán devoluciones por daños derivados de un manejo inadecuado por parte del cliente.</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-3">Procedimiento de Devolución</h4>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">1.</span> Envía tu solicitud a <span className="font-mono bg-gray-200 px-2 py-1 rounded">ventas@greenpack.mx</span> con fotografías del defecto.</li>
                      <li><span className="font-semibold">2.</span> Green Pack evaluará tu solicitud en un plazo de 48 horas.</li>
                      <li><span className="font-semibold">3.</span> Si es aprobada, recibirás una guía de paquetería para la recolección.</li>
                      <li><span className="font-semibold">4.</span> Una vez inspeccionado, procederemos con el reembolso o reimpresión.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Políticas de Cancelación */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <button
                onClick={() => toggleSection('cancelacion')}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white p-6 flex items-center justify-between transition-colors"
              >
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Políticas de Cancelación
                </h3>
                {expandedSections.cancelacion ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {expandedSections.cancelacion && (
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    La política de cancelación está directamente ligada al estado del proceso de producción, dado que los empaques personalizados implican una inversión inmediata en materiales y mano de obra.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">Cancelación Antes de la Producción</h5>
                      <p className="text-gray-700 text-sm mb-2">El pedido se encuentra en etapa de diseño o pre-prensa, antes de la impresión.</p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="font-semibold text-gray-800">Plazo Cliente:</p>
                          <p className="text-gray-600">24 horas después del pago</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Reembolso:</p>
                          <p className="text-gray-600">100% menos 5% (gastos administrativos)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">Cancelación Durante la Producción</h5>
                      <p className="text-gray-700 text-sm mb-2">El pedido ha ingresado a la línea de impresión o corte.</p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="font-semibold text-gray-800">Plazo Cliente:</p>
                          <p className="text-gray-600">48 horas después del pago</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Reembolso:</p>
                          <p className="text-gray-600">50% del valor (material + mano de obra)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">Cancelación Posterior al Envío</h5>
                      <p className="text-gray-700 text-sm">No aplica. El pedido se rige bajo la política de devoluciones.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-3">Consideraciones Adicionales</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Productos Personalizados:</span> El factor determinante es la aprobación del arte final. Una vez iniciada la impresión, el costo de cancelación se incrementa sustancialmente.</li>
                      <li><span className="font-semibold">Suscripciones:</span> La cancelación de paquetes por suscripción mensual deberá notificarse con un mínimo de 7 días de anticipación a la fecha de facturación.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Estrategias de Satisfacción */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection('satisfaccion')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-6 flex items-center justify-between transition-colors"
              >
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Estrategias de Satisfacción del Cliente
                </h3>
                {expandedSections.satisfaccion ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {expandedSections.satisfaccion && (
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    La medición de la satisfacción del cliente B2B es un pilar estratégico para Green Pack, enfocado en la retención y la promoción de la marca. Las siguientes estrategias se implementan para evaluar la calidad del producto, la eficiencia logística y la experiencia de personalización.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">1. Net Promoter Score (NPS) Post-Entrega</h5>
                      <p className="text-gray-700 text-sm mb-2">Mide la lealtad y la propensión del cliente a recomendar Green Pack a otros negocios.</p>
                      <p className="text-sm text-gray-600"><span className="font-semibold">Frecuencia:</span> 7 días después de la entrega y semestralmente.</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">2. Customer Effort Score (CES)</h5>
                      <p className="text-gray-700 text-sm mb-2">Evalúa la fricción en el proceso de personalización, nuestro servicio de valor agregado.</p>
                      <p className="text-sm text-gray-600"><span className="font-semibold">Frecuencia:</span> Inmediatamente después de la aprobación del diseño final.</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">3. Tasa de Recompra y Valor de Vida del Cliente (CLV)</h5>
                      <p className="text-gray-700 text-sm mb-2">Indicadores financieros directos que confirman la satisfacción a largo plazo.</p>
                      <p className="text-sm text-gray-600"><span className="font-semibold">Frecuencia:</span> Mensual y trimestral.</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">4. Encuestas de Satisfacción del Producto (CSAT)</h5>
                      <p className="text-gray-700 text-sm mb-2">Se enfoca en la evaluación de la calidad intrínseca del empaque y la precisión de la orden.</p>
                      <p className="text-sm text-gray-600"><span className="font-semibold">Frecuencia:</span> 30 días después de la entrega del pedido.</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h5 className="font-bold text-gray-800 mb-2">5. Análisis de la Tasa de Abandono del Carrito</h5>
                      <p className="text-gray-700 text-sm mb-2">Permite identificar problemas de usabilidad, costos de envío o falta de claridad en las políticas.</p>
                      <p className="text-sm text-gray-600"><span className="font-semibold">Frecuencia:</span> Monitoreo web continuo.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-24">
              <h4 className="text-xl font-bold text-gray-800 mb-4">¿Preguntas?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Si tienes dudas sobre nuestras políticas, no dudes en contactarnos.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Email</p>
                  <p className="text-green-600 font-mono text-sm">ventas@greenpack.mx</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enviar Consulta
                </Button>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-green-50 rounded-xl border-2 border-green-200 p-6">
              <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Compromiso B2B
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Transparencia en procesos</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Plazos claros y precisos</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Calidad garantizada</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Atención personalizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">GreenPack</span>
          </div>
          <p className="text-gray-400 mb-2">
            Empaques ecológicos y personalizados para tu negocio
          </p>
          <p className="text-sm text-gray-500">
            © 2025 GreenPack. Comprometidos con el medio ambiente.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PoliciesPage
