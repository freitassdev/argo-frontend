'use client';

import GradientTitle from "@/components/shared/gradient-title/gradient-title"
import Navbar from "@/components/shared/navbar/navbar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ReturnButton from "@/components/shared/return-button/return-button"
import { AnimatePresence, motion } from "framer-motion";
import { File, Trash2, Upload } from "lucide-react";
import type React from "react";
import { type DragEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import axios from "@/services/axios.service";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface FileWithPreview extends File {
    preview: string;
}


interface Item {
    id: number;
    name: string;
}

export default function CreateProductPage() {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<number | null>(null);
    const [value, setValue] = useState<number | null>(null);
    const [promotionalValue, setPromotionalValue] = useState<number | null>(null);
    const [color, setColor] = useState<number | null>(null);
    const [market, setMarket] = useState<number | null>(null);

    const [allColors, setAllColors] = useState<Item[]>([]);
    const [allMarcas, setAllMarcas] = useState<Item[]>([]);
    const [allCategorias, setAllCategorias] = useState<Item[]>([]);
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [isDragActive, setIsDragActive] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isPromotional, setIsPromotional] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFiles = (fileList: File[]) => {
        const newFiles = fileList.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            }),
        );
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(Array.from(e.target.files));
        }
    };

    const handleDeleteFile = (fileToDelete: FileWithPreview) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
        URL.revokeObjectURL(fileToDelete.preview);
    };

    useEffect(() => {
        const getColors = async () => {
            try {
                const { data: colorData } = await axios.post('consulta/consulta.php', {
                    tipo: "cor"
                });
                if (!colorData) return toast.error("Ocorreu um erro ao buscar as cores");
                const colors = colorData.map((color: { CORID: string, CORNOME: string }) => {
                    return {
                        id: parseInt(color.CORID),
                        name: color.CORNOME
                    }
                })
                setColor(parseInt(colors[0].id))
                setAllColors(colors)
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao buscar as cores");
            }
        }

        const getMarcas = async () => {
            try {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "marca"
                });
                if (!data) return toast.error("Ocorreu um erro ao buscar as marcas");
                const marcas = data.map((marca: { MARCAID: string, MARCANOME: string }) => {
                    return {
                        id: parseInt(marca.MARCAID),
                        name: marca.MARCANOME
                    }
                })
                setMarket(parseInt(marcas[0].id))
                setAllMarcas(marcas)
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao buscar as marcas");
            }
        }

        const getCategory = async () => {
            try {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "categoria"
                });
                if (!data) return toast.error("Ocorreu um erro ao buscar as categorias");
                const categorias = data.map((category: { CTGID: string, CATEGORIA: string }) => {
                    return {
                        id: parseInt(category.CTGID),
                        name: category.CATEGORIA
                    }
                })
                setCategory(parseInt(categorias[0].id))
                setAllCategorias(categorias)
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao buscar as marcas");
            }
        }
        if (isFirstRender) {
            setIsFirstRender(false);
            getMarcas();
            getCategory();
            getColors();
        }
    }, [isFirstRender])

    const handleCreateProduct = async () => {
        if (!name || !description || !category || !value || !market || !color || !files.length) {
            return toast.error("Preencha todos os campos obrigatórios!");
        }
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('TABELA', 'produtos');
            formData.append('PRDNOME', name);
            formData.append('PRDDESCRICAO', description);
            formData.append('PRDMARCA', market.toString());
            formData.append('PRDCATEG', category.toString());
            formData.append('PRDCOR', color.toString());
            formData.append('PRDVLRUNIT', value.toString());
            formData.append('PRDVLRDESC', promotionalValue?.toString() || '');
            formData.append('PRDATIVO', '1');
            if (isPromotional) {
                formData.append('PRDDESC', '1');
            } else {
                formData.append('PRDDESC', '0');
            }
    
            formData.append('PRDIMAGE', files[0]);
            const { data } = await axios.post('insert-and-routes/insert.php', formData)
            if (!data) return toast.error("Ocorreu um erro ao cadastrar o produto!");
    
            if (data.status && data.status.toLowerCase().includes('erro'))
                return toast.error(data.message || "Ocorreu um erro ao cadastrar o produto!");
    
            if (data.status && data.status.toLowerCase().includes('sucesso')) {
                toast.success(data.message || "Produto cadastrado com sucesso!")
                setTimeout(() => {
                    router.refresh()
                }, 2000);
                return;
            };
            return toast.error("Ocorreu um erro ao cadastrar o produto!");
        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro ao cadastrar o produto!");
        } finally { //apos passar pelo try ou catch
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center w-full h-dvh">
            <Navbar />
            <div className="flex flex-col gap-2 mt-24 min-w-full h-full pb-14 ">
                <ReturnButton />
                <GradientTitle className="text-5xl">Cadastrar Produto</GradientTitle>
                <div className="shadow-xl flex flex-col gap-2 w-full h-full rounded-2xl bg-background border border-border p-5">
                    <div className="grid grid-cols-2 gap-2 w-full h-fit">
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Nome do Produto*</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value.substring(0, 145))} />
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Descrição (max. 200 caractéres)*</Label>
                            <Textarea value={description} onChange={(e) => setDescription(e.target.value.substring(0, 199))} />
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Marca*</Label>
                            <select className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" value={market || 0} onChange={(e) => setMarket(parseInt(e.target.value))} name="marca" id="marca">
                                {allMarcas.map((marca) => (
                                    <option key={marca.id} value={marca.id}>{marca.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Categoria*</Label>
                            <select className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={category || 0} onChange={(e) => setCategory(parseInt(e.target.value))} name="category" id="category">
                                {allCategorias.map((categ) => (
                                    <option key={categ.id} value={categ.id}>{categ.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Cor*</Label>
                            <select className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={color || 0} onChange={(e) => setColor(parseInt(e.target.value))} name="color" id="color">
                                {allColors.map((color) => (
                                    <option key={color.id} value={color.id}>{color.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <Label className="text-lg">Valor do Produto (R$)*</Label>
                            <Input type="number"
                                value={value !== null ? value : ''}
                                onChange={(e) => setValue(Number(e.target.value))} />
                        </div>
                        <div className="flex flex-col gap-1 w-full h-fit">
                            <div className="flex flex-row items-center gap-3">
                                <Label className="text-lg">Valor Promocional (R$)</Label>
                                <Switch checked={isPromotional} onCheckedChange={setIsPromotional} />
                            </div>
                            <Input type="number"
                                disabled={!isPromotional}
                                onChange={(e) => setPromotionalValue(Number(e.target.value))}
                                value={promotionalValue !== null ? promotionalValue : ''} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <Label className="text-lg">Imagem do Produto (max. 1 arquivo)*</Label>
                        <div className="h-60 w-full">
                            <motion.div
                                className={`relative size-full flex flex-col items-center justify-center cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-colors ${isDragActive
                                    ? "border-blue-500 bg-blue-500/5"
                                    : "border-primary dark:border-border"
                                    } ${files.length > 0 ? "hidden" : ""}`}
                                onClick={handleButtonClick}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <input
                                    accept="image/*,application/pdf"
                                    className="hidden"
                                    multiple={false}
                                    max={1}
                                    onChange={handleFileInputChange}
                                    ref={fileInputRef}
                                    type="file"
                                />
                                <AnimatePresence>
                                    {isDragActive ? (
                                        <motion.div
                                            animate={{ opacity: 1, y: 0 }}
                                            className=" pointer-events-none select-none"
                                            exit={{ opacity: 0, y: -10 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Upload className="pointer-events-none mx-auto size-8 select-none text-blue-500" />
                                            <p className="pointer-events-none mt-2 select-none text-blue-500 text-sm">
                                                Solte o arquivo aqui...
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            initial={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Upload className="mx-auto size-8 text-neutral-400 dark:text-neutral-500" />
                                            <p className="mt-2 text-balance font-medium text-neutral-400 text-sm tracking-tighter dark:text-neutral-500">
                                                Arraste e solte a imagem aqui ou clique para fazer upload
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <AnimatePresence>
                                {files.length > 0 && (
                                    <motion.div
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="mt-4 space-y-2"
                                        exit={{ opacity: 0, height: 0 }}
                                        initial={{ opacity: 0, height: 0 }}
                                    >
                                        {files.map((file) => (
                                            <motion.div
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center rounded-lg bg-neutral-400/10 p-1"
                                                exit={{ opacity: 0, x: 20 }}
                                                initial={{ opacity: 0, x: -20 }}
                                                key={file.name}
                                            >
                                                {file.type.startsWith("image/") ? (
                                                    <img
                                                        alt={file.name}
                                                        className="mr-2 size-10 rounded object-cover"
                                                        src={file.preview}
                                                    />
                                                ) : (
                                                    <File className="mr-2 size-10 text-neutral-500" />
                                                )}
                                                <span className="flex-1 truncate text-neutral-600 text-xs tracking-tighter dark:text-neutral-400">
                                                    {file.name}
                                                </span>
                                                <Trash2
                                                    className="mr-2 size-5 cursor-pointer text-red-500 transition-colors hover:text-red-600"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteFile(file);
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                        <Button onClick={handleCreateProduct}>
                            {isLoading ? "Carregando..." : "Cadastrar Produto"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}