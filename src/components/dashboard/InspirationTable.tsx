/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import CustomPaginations from "../common/CustomPaginations"
import { sampleInspirationPosts } from "@/types/fakeData"



export default function InspirationPostManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalItems = sampleInspirationPosts.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPosts = sampleInspirationPosts.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleEdit = (id: number) => {
    console.log(`Edit post ${id}`)
  }

  const handleAddNew = (id: number) => {
    console.log(`Add new post for ${id}`)
  }

  return (
    <div className="">
      <h1 className="text-2xl font-semibold py-6 text-gray-900">Inspiration Post Management</h1>

      <div className="bg-white rounded-lg pt-4">
        <Table className="border-0">
          <TableHeader>
            <TableRow className="border-0">
              <TableHead className="text-gray-600 font-medium py-4 px-6">DATE</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">TITLE</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">DESCRIPTION</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">STATUS</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPosts.map((post:any, index:number) => (
              <TableRow
                key={post.id}
                className={` hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
              >
                <TableCell className="py-4 px-6 text-gray-900 font-medium">{post.date}</TableCell>
                <TableCell className="py-4 px-6 text-gray-900">{post.title}</TableCell>
                <TableCell className="py-4 px-6 text-gray-600">{post.description}</TableCell>
                <TableCell className="py-4 px-6">
                  <Badge
                    variant={post.status === "Published" ? "default" : "destructive"}
                    className={
                      post.status === "Published"
                        ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
                        : "bg-red-100 text-bsecondary hover:bg-red-100 border-red-200"
                    }
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-4 px-6">
                  {post.status === "Published" ? (
                    <Button
                      variant="link"
                      className="text-blue-600 border px-3 py-1  bg-blue-500/10 border-blue-500/50 hover:text-blue-800 h-auto font-normal"
                      onClick={() => handleEdit(post.id)}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 h-auto"
                      onClick={() => handleAddNew(post.id)}
                    >
                      Add New +
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <CustomPaginations
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
