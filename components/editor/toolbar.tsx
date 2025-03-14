"use client"

import React from "react"
import { Undo, Redo, Minus, Plus, MousePointer, Type, Square, Palette, Eye, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useEditor } from "@/contexts/editor-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function EditorToolbar() {
  const { zoom, setZoom } = useEditor()
  const { activeTab, setActiveTab, viewMode, setViewMode } = useEditor()

  return (
    <div className="editor-toolbar flex h-12 items-center justify-between border-b px-6">
      {/* Left side controls */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MousePointer className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Type className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Palette className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Redo className="h-4 w-4" />
        </Button>
        <div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(Math.max(25, zoom - 25))} >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-xs w-9 text-center">{zoom}%</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(Math.min(200, zoom + 25))} >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      
    </div>







  )
}



