# `statefulNodeAzure` Submodule <a name="`statefulNodeAzure` Submodule" id="@cdktf/provider-spotinst.statefulNodeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatefulNodeAzure <a name="StatefulNodeAzure" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure spotinst_stateful_node_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzure(scope: Construct, id: string, config: StatefulNodeAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig">StatefulNodeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig">StatefulNodeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk">putAttachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk">putDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete">putDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk">putDetachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm">putImportVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin">putLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities">putManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask">putSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal">putSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState">putUpdateState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk">resetAttachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk">resetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode">resetDataDisksPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk">resetDetachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm">resetImportVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities">resetManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk">resetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode">resetOsDiskPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes">resetPreferredSpotSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones">resetPreferredZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask">resetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm">resetShouldPersistVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript">resetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal">resetSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState">resetUpdateState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAttachDataDisk` <a name="putAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk"></a>

```typescript
public putAttachDataDisk(value: IResolvable | StatefulNodeAzureAttachDataDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics"></a>

```typescript
public putBootDiagnostics(value: IResolvable | StatefulNodeAzureBootDiagnostics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]

---

##### `putDataDisk` <a name="putDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk"></a>

```typescript
public putDataDisk(value: IResolvable | StatefulNodeAzureDataDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]

---

##### `putDelete` <a name="putDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete"></a>

```typescript
public putDelete(value: IResolvable | StatefulNodeAzureDelete[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]

---

##### `putDetachDataDisk` <a name="putDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk"></a>

```typescript
public putDetachDataDisk(value: IResolvable | StatefulNodeAzureDetachDataDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension"></a>

```typescript
public putExtension(value: IResolvable | StatefulNodeAzureExtension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth"></a>

```typescript
public putHealth(value: StatefulNodeAzureHealth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `putImage` <a name="putImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage"></a>

```typescript
public putImage(value: StatefulNodeAzureImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `putImportVm` <a name="putImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm"></a>

```typescript
public putImportVm(value: IResolvable | StatefulNodeAzureImportVm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: IResolvable | StatefulNodeAzureLoadBalancer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]

---

##### `putLogin` <a name="putLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin"></a>

```typescript
public putLogin(value: StatefulNodeAzureLogin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `putManagedServiceIdentities` <a name="putManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities"></a>

```typescript
public putManagedServiceIdentities(value: IResolvable | StatefulNodeAzureManagedServiceIdentities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork"></a>

```typescript
public putNetwork(value: StatefulNodeAzureNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk"></a>

```typescript
public putOsDisk(value: StatefulNodeAzureOsDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `putSchedulingTask` <a name="putSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask"></a>

```typescript
public putSchedulingTask(value: IResolvable | StatefulNodeAzureSchedulingTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret"></a>

```typescript
public putSecret(value: IResolvable | StatefulNodeAzureSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]

---

##### `putSignal` <a name="putSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal"></a>

```typescript
public putSignal(value: IResolvable | StatefulNodeAzureSignal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy"></a>

```typescript
public putStrategy(value: StatefulNodeAzureStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag"></a>

```typescript
public putTag(value: IResolvable | StatefulNodeAzureTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]

---

##### `putUpdateState` <a name="putUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState"></a>

```typescript
public putUpdateState(value: IResolvable | StatefulNodeAzureUpdateState[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]

---

##### `resetAttachDataDisk` <a name="resetAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk"></a>

```typescript
public resetAttachDataDisk(): void
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics"></a>

```typescript
public resetBootDiagnostics(): void
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData"></a>

```typescript
public resetCustomData(): void
```

##### `resetDataDisk` <a name="resetDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk"></a>

```typescript
public resetDataDisk(): void
```

##### `resetDataDisksPersistenceMode` <a name="resetDataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode"></a>

```typescript
public resetDataDisksPersistenceMode(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDetachDataDisk` <a name="resetDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk"></a>

```typescript
public resetDetachDataDisk(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth"></a>

```typescript
public resetHealth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportVm` <a name="resetImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm"></a>

```typescript
public resetImportVm(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetManagedServiceIdentities` <a name="resetManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities"></a>

```typescript
public resetManagedServiceIdentities(): void
```

##### `resetOsDisk` <a name="resetOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk"></a>

```typescript
public resetOsDisk(): void
```

##### `resetOsDiskPersistenceMode` <a name="resetOsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode"></a>

```typescript
public resetOsDiskPersistenceMode(): void
```

##### `resetPreferredSpotSizes` <a name="resetPreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes"></a>

```typescript
public resetPreferredSpotSizes(): void
```

##### `resetPreferredZones` <a name="resetPreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones"></a>

```typescript
public resetPreferredZones(): void
```

##### `resetSchedulingTask` <a name="resetSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask"></a>

```typescript
public resetSchedulingTask(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetShouldPersistVm` <a name="resetShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm"></a>

```typescript
public resetShouldPersistVm(): void
```

##### `resetShutdownScript` <a name="resetShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript"></a>

```typescript
public resetShutdownScript(): void
```

##### `resetSignal` <a name="resetSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal"></a>

```typescript
public resetSignal(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetUpdateState` <a name="resetUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState"></a>

```typescript
public resetUpdateState(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

statefulNodeAzure.StatefulNodeAzure.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

statefulNodeAzure.StatefulNodeAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

statefulNodeAzure.StatefulNodeAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk">attachDataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk">dataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete">delete</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk">detachDataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm">importVm</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities">managedServiceIdentities</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask">schedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal">signal</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState">updateState</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput">attachDataDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput">customDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput">dataDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput">dataDisksPersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput">deleteInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput">detachDataDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput">extensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput">importVmInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput">loadBalancerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput">loginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput">managedServiceIdentitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput">odSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput">osDiskPersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput">preferredSpotSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput">preferredZonesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput">schedulingTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput">shouldPersistDataDisksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput">shouldPersistNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput">shouldPersistOsDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput">shouldPersistVmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput">shutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput">signalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput">spotSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput">updateStateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData">customData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode">dataDisksPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes">odSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode">osDiskPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes">preferredSpotSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones">preferredZones</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks">shouldPersistDataDisks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork">shouldPersistNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk">shouldPersistOsDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm">shouldPersistVm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes">spotSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachDataDisk`<sup>Required</sup> <a name="attachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk"></a>

```typescript
public readonly attachDataDisk: StatefulNodeAzureAttachDataDiskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: StatefulNodeAzureBootDiagnosticsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a>

---

##### `dataDisk`<sup>Required</sup> <a name="dataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk"></a>

```typescript
public readonly dataDisk: StatefulNodeAzureDataDiskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a>

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete"></a>

```typescript
public readonly delete: StatefulNodeAzureDeleteList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a>

---

##### `detachDataDisk`<sup>Required</sup> <a name="detachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk"></a>

```typescript
public readonly detachDataDisk: StatefulNodeAzureDetachDataDiskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension"></a>

```typescript
public readonly extension: StatefulNodeAzureExtensionList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health"></a>

```typescript
public readonly health: StatefulNodeAzureHealthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image"></a>

```typescript
public readonly image: StatefulNodeAzureImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a>

---

##### `importVm`<sup>Required</sup> <a name="importVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm"></a>

```typescript
public readonly importVm: StatefulNodeAzureImportVmList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: StatefulNodeAzureLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login"></a>

```typescript
public readonly login: StatefulNodeAzureLoginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a>

---

##### `managedServiceIdentities`<sup>Required</sup> <a name="managedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities"></a>

```typescript
public readonly managedServiceIdentities: StatefulNodeAzureManagedServiceIdentitiesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network"></a>

```typescript
public readonly network: StatefulNodeAzureNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk"></a>

```typescript
public readonly osDisk: StatefulNodeAzureOsDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a>

---

##### `schedulingTask`<sup>Required</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: StatefulNodeAzureSchedulingTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret"></a>

```typescript
public readonly secret: StatefulNodeAzureSecretList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a>

---

##### `signal`<sup>Required</sup> <a name="signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal"></a>

```typescript
public readonly signal: StatefulNodeAzureSignalList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy"></a>

```typescript
public readonly strategy: StatefulNodeAzureStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag"></a>

```typescript
public readonly tag: StatefulNodeAzureTagList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a>

---

##### `updateState`<sup>Required</sup> <a name="updateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState"></a>

```typescript
public readonly updateState: StatefulNodeAzureUpdateStateList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a>

---

##### `attachDataDiskInput`<sup>Optional</sup> <a name="attachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput"></a>

```typescript
public readonly attachDataDiskInput: IResolvable | StatefulNodeAzureAttachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput"></a>

```typescript
public readonly bootDiagnosticsInput: IResolvable | StatefulNodeAzureBootDiagnostics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput"></a>

```typescript
public readonly customDataInput: string;
```

- *Type:* string

---

##### `dataDiskInput`<sup>Optional</sup> <a name="dataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput"></a>

```typescript
public readonly dataDiskInput: IResolvable | StatefulNodeAzureDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]

---

##### `dataDisksPersistenceModeInput`<sup>Optional</sup> <a name="dataDisksPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput"></a>

```typescript
public readonly dataDisksPersistenceModeInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput"></a>

```typescript
public readonly deleteInput: IResolvable | StatefulNodeAzureDelete[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detachDataDiskInput`<sup>Optional</sup> <a name="detachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput"></a>

```typescript
public readonly detachDataDiskInput: IResolvable | StatefulNodeAzureDetachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput"></a>

```typescript
public readonly extensionInput: IResolvable | StatefulNodeAzureExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput"></a>

```typescript
public readonly healthInput: StatefulNodeAzureHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput"></a>

```typescript
public readonly imageInput: StatefulNodeAzureImage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `importVmInput`<sup>Optional</sup> <a name="importVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput"></a>

```typescript
public readonly importVmInput: IResolvable | StatefulNodeAzureImportVm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: IResolvable | StatefulNodeAzureLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput"></a>

```typescript
public readonly loginInput: StatefulNodeAzureLogin;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `managedServiceIdentitiesInput`<sup>Optional</sup> <a name="managedServiceIdentitiesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput"></a>

```typescript
public readonly managedServiceIdentitiesInput: IResolvable | StatefulNodeAzureManagedServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput"></a>

```typescript
public readonly networkInput: StatefulNodeAzureNetwork;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `odSizesInput`<sup>Optional</sup> <a name="odSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput"></a>

```typescript
public readonly odSizesInput: string[];
```

- *Type:* string[]

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput"></a>

```typescript
public readonly osDiskInput: StatefulNodeAzureOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `osDiskPersistenceModeInput`<sup>Optional</sup> <a name="osDiskPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput"></a>

```typescript
public readonly osDiskPersistenceModeInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `preferredSpotSizesInput`<sup>Optional</sup> <a name="preferredSpotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput"></a>

```typescript
public readonly preferredSpotSizesInput: string[];
```

- *Type:* string[]

---

##### `preferredZonesInput`<sup>Optional</sup> <a name="preferredZonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput"></a>

```typescript
public readonly preferredZonesInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `schedulingTaskInput`<sup>Optional</sup> <a name="schedulingTaskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput"></a>

```typescript
public readonly schedulingTaskInput: IResolvable | StatefulNodeAzureSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | StatefulNodeAzureSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]

---

##### `shouldPersistDataDisksInput`<sup>Optional</sup> <a name="shouldPersistDataDisksInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput"></a>

```typescript
public readonly shouldPersistDataDisksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistNetworkInput`<sup>Optional</sup> <a name="shouldPersistNetworkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput"></a>

```typescript
public readonly shouldPersistNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistOsDiskInput`<sup>Optional</sup> <a name="shouldPersistOsDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput"></a>

```typescript
public readonly shouldPersistOsDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistVmInput`<sup>Optional</sup> <a name="shouldPersistVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput"></a>

```typescript
public readonly shouldPersistVmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shutdownScriptInput`<sup>Optional</sup> <a name="shutdownScriptInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput"></a>

```typescript
public readonly shutdownScriptInput: string;
```

- *Type:* string

---

##### `signalInput`<sup>Optional</sup> <a name="signalInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput"></a>

```typescript
public readonly signalInput: IResolvable | StatefulNodeAzureSignal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]

---

##### `spotSizesInput`<sup>Optional</sup> <a name="spotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput"></a>

```typescript
public readonly spotSizesInput: string[];
```

- *Type:* string[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput"></a>

```typescript
public readonly strategyInput: StatefulNodeAzureStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | StatefulNodeAzureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]

---

##### `updateStateInput`<sup>Optional</sup> <a name="updateStateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput"></a>

```typescript
public readonly updateStateInput: IResolvable | StatefulNodeAzureUpdateState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

---

##### `dataDisksPersistenceMode`<sup>Required</sup> <a name="dataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode"></a>

```typescript
public readonly dataDisksPersistenceMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes"></a>

```typescript
public readonly odSizes: string[];
```

- *Type:* string[]

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `osDiskPersistenceMode`<sup>Required</sup> <a name="osDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode"></a>

```typescript
public readonly osDiskPersistenceMode: string;
```

- *Type:* string

---

##### `preferredSpotSizes`<sup>Required</sup> <a name="preferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes"></a>

```typescript
public readonly preferredSpotSizes: string[];
```

- *Type:* string[]

---

##### `preferredZones`<sup>Required</sup> <a name="preferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones"></a>

```typescript
public readonly preferredZones: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shouldPersistDataDisks`<sup>Required</sup> <a name="shouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks"></a>

```typescript
public readonly shouldPersistDataDisks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistNetwork`<sup>Required</sup> <a name="shouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork"></a>

```typescript
public readonly shouldPersistNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistOsDisk`<sup>Required</sup> <a name="shouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk"></a>

```typescript
public readonly shouldPersistOsDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldPersistVm`<sup>Required</sup> <a name="shouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm"></a>

```typescript
public readonly shouldPersistVm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shutdownScript`<sup>Required</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

---

##### `spotSizes`<sup>Required</sup> <a name="spotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes"></a>

```typescript
public readonly spotSizes: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatefulNodeAzureAttachDataDisk <a name="StatefulNodeAzureAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureAttachDataDisk: statefulNodeAzure.StatefulNodeAzureAttachDataDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName">dataDiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName">dataDiskResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb">sizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun">lun</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}. |

---

##### `dataDiskName`<sup>Required</sup> <a name="dataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName"></a>

```typescript
public readonly dataDiskName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `dataDiskResourceGroupName`<sup>Required</sup> <a name="dataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName"></a>

```typescript
public readonly dataDiskResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}.

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}.

---

### StatefulNodeAzureBootDiagnostics <a name="StatefulNodeAzureBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureBootDiagnostics: statefulNodeAzure.StatefulNodeAzureBootDiagnostics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl">storageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `storageUrl`<sup>Optional</sup> <a name="storageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl"></a>

```typescript
public readonly storageUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureConfig <a name="StatefulNodeAzureConfig" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureConfig: statefulNodeAzure.StatefulNodeAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes">odSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks">shouldPersistDataDisks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork">shouldPersistNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk">shouldPersistOsDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes">spotSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk">attachDataDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]</code> | attach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]</code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData">customData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk">dataDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode">dataDisksPersistenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete">delete</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk">detachDataDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]</code> | detach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension">extension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm">importVm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]</code> | import_vm block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer">loadBalancer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities">managedServiceIdentities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode">osDiskPersistenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes">preferredSpotSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones">preferredZones</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask">schedulingTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm">shouldPersistVm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal">signal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]</code> | signal block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState">updateState</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]</code> | update_state block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image"></a>

```typescript
public readonly image: StatefulNodeAzureImage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image StatefulNodeAzure#image}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login"></a>

```typescript
public readonly login: StatefulNodeAzureLogin;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#login StatefulNodeAzure#login}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network"></a>

```typescript
public readonly network: StatefulNodeAzureNetwork;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network StatefulNodeAzure#network}

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes"></a>

```typescript
public readonly odSizes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `shouldPersistDataDisks`<sup>Required</sup> <a name="shouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks"></a>

```typescript
public readonly shouldPersistDataDisks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}.

---

##### `shouldPersistNetwork`<sup>Required</sup> <a name="shouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork"></a>

```typescript
public readonly shouldPersistNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}.

---

##### `shouldPersistOsDisk`<sup>Required</sup> <a name="shouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk"></a>

```typescript
public readonly shouldPersistOsDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}.

---

##### `spotSizes`<sup>Required</sup> <a name="spotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes"></a>

```typescript
public readonly spotSizes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy"></a>

```typescript
public readonly strategy: StatefulNodeAzureStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#strategy StatefulNodeAzure#strategy}

---

##### `attachDataDisk`<sup>Optional</sup> <a name="attachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk"></a>

```typescript
public readonly attachDataDisk: IResolvable | StatefulNodeAzureAttachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]

attach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: IResolvable | StatefulNodeAzureBootDiagnostics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]

boot_diagnostics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}.

---

##### `dataDisk`<sup>Optional</sup> <a name="dataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk"></a>

```typescript
public readonly dataDisk: IResolvable | StatefulNodeAzureDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]

data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}

---

##### `dataDisksPersistenceMode`<sup>Optional</sup> <a name="dataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode"></a>

```typescript
public readonly dataDisksPersistenceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete"></a>

```typescript
public readonly delete: IResolvable | StatefulNodeAzureDelete[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]

delete block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#delete StatefulNodeAzure#delete}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}.

---

##### `detachDataDisk`<sup>Optional</sup> <a name="detachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk"></a>

```typescript
public readonly detachDataDisk: IResolvable | StatefulNodeAzureDetachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]

detach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension"></a>

```typescript
public readonly extension: IResolvable | StatefulNodeAzureExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]

extension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#extension StatefulNodeAzure#extension}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health"></a>

```typescript
public readonly health: StatefulNodeAzureHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health StatefulNodeAzure#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importVm`<sup>Optional</sup> <a name="importVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm"></a>

```typescript
public readonly importVm: IResolvable | StatefulNodeAzureImportVm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]

import_vm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IResolvable | StatefulNodeAzureLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}

---

##### `managedServiceIdentities`<sup>Optional</sup> <a name="managedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities"></a>

```typescript
public readonly managedServiceIdentities: IResolvable | StatefulNodeAzureManagedServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]

managed_service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}

---

##### `osDisk`<sup>Optional</sup> <a name="osDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk"></a>

```typescript
public readonly osDisk: StatefulNodeAzureOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}

---

##### `osDiskPersistenceMode`<sup>Optional</sup> <a name="osDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode"></a>

```typescript
public readonly osDiskPersistenceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}.

---

##### `preferredSpotSizes`<sup>Optional</sup> <a name="preferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes"></a>

```typescript
public readonly preferredSpotSizes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}.

---

##### `preferredZones`<sup>Optional</sup> <a name="preferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones"></a>

```typescript
public readonly preferredZones: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}.

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: IResolvable | StatefulNodeAzureSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]

scheduling_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | StatefulNodeAzureSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#secret StatefulNodeAzure#secret}

---

##### `shouldPersistVm`<sup>Optional</sup> <a name="shouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm"></a>

```typescript
public readonly shouldPersistVm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}.

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}.

---

##### `signal`<sup>Optional</sup> <a name="signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal"></a>

```typescript
public readonly signal: IResolvable | StatefulNodeAzureSignal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]

signal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#signal StatefulNodeAzure#signal}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | StatefulNodeAzureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag StatefulNodeAzure#tag}

---

##### `updateState`<sup>Optional</sup> <a name="updateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState"></a>

```typescript
public readonly updateState: IResolvable | StatefulNodeAzureUpdateState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]

update_state block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#update_state StatefulNodeAzure#update_state}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}.

---

### StatefulNodeAzureDataDisk <a name="StatefulNodeAzureDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureDataDisk: statefulNodeAzure.StatefulNodeAzureDataDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun">lun</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb">sizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureDelete <a name="StatefulNodeAzureDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureDelete: statefulNodeAzure.StatefulNodeAzureDelete = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate">diskShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate">networkShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate">publicIpShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm">shouldTerminateVm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate">snapshotShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours">diskTtlInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours">networkTtlInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours">publicIpTtlInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours">snapshotTtlInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}. |

---

##### `diskShouldDeallocate`<sup>Required</sup> <a name="diskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate"></a>

```typescript
public readonly diskShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}.

---

##### `networkShouldDeallocate`<sup>Required</sup> <a name="networkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate"></a>

```typescript
public readonly networkShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}.

---

##### `publicIpShouldDeallocate`<sup>Required</sup> <a name="publicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate"></a>

```typescript
public readonly publicIpShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}.

---

##### `shouldTerminateVm`<sup>Required</sup> <a name="shouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm"></a>

```typescript
public readonly shouldTerminateVm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}.

---

##### `snapshotShouldDeallocate`<sup>Required</sup> <a name="snapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate"></a>

```typescript
public readonly snapshotShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}.

---

##### `diskTtlInHours`<sup>Optional</sup> <a name="diskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours"></a>

```typescript
public readonly diskTtlInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}.

---

##### `networkTtlInHours`<sup>Optional</sup> <a name="networkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours"></a>

```typescript
public readonly networkTtlInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}.

---

##### `publicIpTtlInHours`<sup>Optional</sup> <a name="publicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours"></a>

```typescript
public readonly publicIpTtlInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}.

---

##### `snapshotTtlInHours`<sup>Optional</sup> <a name="snapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours"></a>

```typescript
public readonly snapshotTtlInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}.

---

### StatefulNodeAzureDetachDataDisk <a name="StatefulNodeAzureDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureDetachDataDisk: statefulNodeAzure.StatefulNodeAzureDetachDataDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName">dataDiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName">dataDiskResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate">shouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours">ttlInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}. |

---

##### `dataDiskName`<sup>Required</sup> <a name="dataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName"></a>

```typescript
public readonly dataDiskName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `dataDiskResourceGroupName`<sup>Required</sup> <a name="dataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName"></a>

```typescript
public readonly dataDiskResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `shouldDeallocate`<sup>Required</sup> <a name="shouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate"></a>

```typescript
public readonly shouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}.

---

##### `ttlInHours`<sup>Optional</sup> <a name="ttlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours"></a>

```typescript
public readonly ttlInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}.

---

### StatefulNodeAzureExtension <a name="StatefulNodeAzureExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureExtension: statefulNodeAzure.StatefulNodeAzureExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion">apiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade">minorVersionAutoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings">protectedSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings">publicSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}.

---

##### `minorVersionAutoUpgrade`<sup>Required</sup> <a name="minorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade"></a>

```typescript
public readonly minorVersionAutoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}.

---

##### `publicSettings`<sup>Optional</sup> <a name="publicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings"></a>

```typescript
public readonly publicSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}.

---

### StatefulNodeAzureHealth <a name="StatefulNodeAzureHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureHealth: statefulNodeAzure.StatefulNodeAzureHealth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes">healthCheckTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration">unhealthyDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}. |

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}.

---

##### `healthCheckTypes`<sup>Required</sup> <a name="healthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes"></a>

```typescript
public readonly healthCheckTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}.

---

##### `unhealthyDuration`<sup>Optional</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration"></a>

```typescript
public readonly unhealthyDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}.

---

### StatefulNodeAzureImage <a name="StatefulNodeAzureImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureImage: statefulNodeAzure.StatefulNodeAzureImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage">customImage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery">gallery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]</code> | gallery block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage">marketplaceImage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]</code> | marketplace_image block. |

---

##### `customImage`<sup>Optional</sup> <a name="customImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage"></a>

```typescript
public readonly customImage: IResolvable | StatefulNodeAzureImageCustomImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery"></a>

```typescript
public readonly gallery: IResolvable | StatefulNodeAzureImageGallery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]

gallery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery StatefulNodeAzure#gallery}

---

##### `marketplaceImage`<sup>Optional</sup> <a name="marketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage"></a>

```typescript
public readonly marketplaceImage: IResolvable | StatefulNodeAzureImageMarketplaceImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]

marketplace_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}

---

### StatefulNodeAzureImageCustomImage <a name="StatefulNodeAzureImageCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureImageCustomImage: statefulNodeAzure.StatefulNodeAzureImageCustomImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName">customImageResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |

---

##### `customImageResourceGroupName`<sup>Required</sup> <a name="customImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName"></a>

```typescript
public readonly customImageResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

### StatefulNodeAzureImageGallery <a name="StatefulNodeAzureImageGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureImageGallery: statefulNodeAzure.StatefulNodeAzureImageGallery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName">galleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName">galleryResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}. |

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}.

---

##### `galleryResourceGroupName`<sup>Required</sup> <a name="galleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName"></a>

```typescript
public readonly galleryResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}.

---

### StatefulNodeAzureImageMarketplaceImage <a name="StatefulNodeAzureImageMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureImageMarketplaceImage: statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}.

---

### StatefulNodeAzureImportVm <a name="StatefulNodeAzureImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureImportVm: statefulNodeAzure.StatefulNodeAzureImportVm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName">originalVmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime">resourcesRetentionTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}. |

---

##### `originalVmName`<sup>Required</sup> <a name="originalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName"></a>

```typescript
public readonly originalVmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `resourcesRetentionTime`<sup>Optional</sup> <a name="resourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime"></a>

```typescript
public readonly resourcesRetentionTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}.

---

### StatefulNodeAzureLoadBalancer <a name="StatefulNodeAzureLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureLoadBalancer: statefulNodeAzure.StatefulNodeAzureLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames">backendPoolNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |

---

##### `backendPoolNames`<sup>Required</sup> <a name="backendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames"></a>

```typescript
public readonly backendPoolNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

### StatefulNodeAzureLogin <a name="StatefulNodeAzureLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureLogin: statefulNodeAzure.StatefulNodeAzureLogin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}. |

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}.

---

##### `sshPublicKey`<sup>Optional</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}.

---

### StatefulNodeAzureManagedServiceIdentities <a name="StatefulNodeAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureManagedServiceIdentities: statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureNetwork <a name="StatefulNodeAzureNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetwork: statefulNodeAzure.StatefulNodeAzureNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}. |

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | StatefulNodeAzureNetworkNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}.

---

### StatefulNodeAzureNetworkNetworkInterface <a name="StatefulNodeAzureNetworkNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetworkNetworkInterface: statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName">subnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations">additionalIpConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]</code> | additional_ip_configurations block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups">applicationSecurityGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]</code> | application_security_groups block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup">networkSecurityGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]</code> | network_security_group block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps">publicIps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]</code> | public_ips block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku">publicIpSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}. |

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}.

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}.

---

##### `additionalIpConfigurations`<sup>Optional</sup> <a name="additionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations"></a>

```typescript
public readonly additionalIpConfigurations: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]

additional_ip_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}

---

##### `applicationSecurityGroups`<sup>Optional</sup> <a name="applicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups"></a>

```typescript
public readonly applicationSecurityGroups: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]

application_security_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}.

---

##### `enableIpForwarding`<sup>Optional</sup> <a name="enableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}.

---

##### `networkSecurityGroup`<sup>Optional</sup> <a name="networkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup"></a>

```typescript
public readonly networkSecurityGroup: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]

network_security_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="privateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps"></a>

```typescript
public readonly publicIps: IResolvable | StatefulNodeAzureNetworkNetworkInterfacePublicIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]

public_ips block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}

---

##### `publicIpSku`<sup>Optional</sup> <a name="publicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku"></a>

```typescript
public readonly publicIpSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}.

---

### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations: statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion">privateIpAddressVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `privateIpAddressVersion`<sup>Required</sup> <a name="privateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion"></a>

```typescript
public readonly privateIpAddressVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}.

---

### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups: statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup: statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `networkResourceGroupName`<sup>Optional</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfacePublicIps <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureNetworkNetworkInterfacePublicIps: statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureOsDisk <a name="StatefulNodeAzureOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureOsDisk: statefulNodeAzure.StatefulNodeAzureOsDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb">sizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `sizeGb`<sup>Optional</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

### StatefulNodeAzureSchedulingTask <a name="StatefulNodeAzureSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureSchedulingTask: statefulNodeAzure.StatefulNodeAzureSchedulingTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureSecret <a name="StatefulNodeAzureSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureSecret: statefulNodeAzure.StatefulNodeAzureSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault">sourceVault</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]</code> | source_vault block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates">vaultCertificates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]</code> | vault_certificates block. |

---

##### `sourceVault`<sup>Required</sup> <a name="sourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault"></a>

```typescript
public readonly sourceVault: IResolvable | StatefulNodeAzureSecretSourceVault[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]

source_vault block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}

---

##### `vaultCertificates`<sup>Required</sup> <a name="vaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates"></a>

```typescript
public readonly vaultCertificates: IResolvable | StatefulNodeAzureSecretVaultCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]

vault_certificates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}

---

### StatefulNodeAzureSecretSourceVault <a name="StatefulNodeAzureSecretSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureSecretSourceVault: statefulNodeAzure.StatefulNodeAzureSecretSourceVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureSecretVaultCertificates <a name="StatefulNodeAzureSecretVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureSecretVaultCertificates: statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore">certificateStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl">certificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}. |

---

##### `certificateStore`<sup>Optional</sup> <a name="certificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore"></a>

```typescript
public readonly certificateStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}.

---

##### `certificateUrl`<sup>Optional</sup> <a name="certificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}.

---

### StatefulNodeAzureSignal <a name="StatefulNodeAzureSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureSignal: statefulNodeAzure.StatefulNodeAzureSignal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureStrategy <a name="StatefulNodeAzureStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureStrategy: statefulNodeAzure.StatefulNodeAzureStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand">fallbackToOnDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows">optimizationWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle">preferredLifeCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot">revertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | revert_to_spot block. |

---

##### `fallbackToOnDemand`<sup>Required</sup> <a name="fallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand"></a>

```typescript
public readonly fallbackToOnDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `optimizationWindows`<sup>Optional</sup> <a name="optimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows"></a>

```typescript
public readonly optimizationWindows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}.

---

##### `preferredLifeCycle`<sup>Optional</sup> <a name="preferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle"></a>

```typescript
public readonly preferredLifeCycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}.

---

##### `revertToSpot`<sup>Optional</sup> <a name="revertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot"></a>

```typescript
public readonly revertToSpot: StatefulNodeAzureStrategyRevertToSpot;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}

---

### StatefulNodeAzureStrategyRevertToSpot <a name="StatefulNodeAzureStrategyRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureStrategyRevertToSpot: statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt">performAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}. |

---

##### `performAt`<sup>Required</sup> <a name="performAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt"></a>

```typescript
public readonly performAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}.

---

### StatefulNodeAzureTag <a name="StatefulNodeAzureTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureTag: statefulNodeAzure.StatefulNodeAzureTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}.

---

### StatefulNodeAzureUpdateState <a name="StatefulNodeAzureUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

const statefulNodeAzureUpdateState: statefulNodeAzure.StatefulNodeAzureUpdateState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}. |

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### StatefulNodeAzureAttachDataDiskList <a name="StatefulNodeAzureAttachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureAttachDataDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureAttachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureAttachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>[]

---


### StatefulNodeAzureAttachDataDiskOutputReference <a name="StatefulNodeAzureAttachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun">resetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLun` <a name="resetLun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun"></a>

```typescript
public resetLun(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput">dataDiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">dataDiskResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName">dataDiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName">dataDiskResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataDiskNameInput`<sup>Optional</sup> <a name="dataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput"></a>

```typescript
public readonly dataDiskNameInput: string;
```

- *Type:* string

---

##### `dataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="dataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```typescript
public readonly dataDiskResourceGroupNameInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `dataDiskName`<sup>Required</sup> <a name="dataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName"></a>

```typescript
public readonly dataDiskName: string;
```

- *Type:* string

---

##### `dataDiskResourceGroupName`<sup>Required</sup> <a name="dataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```typescript
public readonly dataDiskResourceGroupName: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureAttachDataDisk | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a> | cdktf.IResolvable

---


### StatefulNodeAzureBootDiagnosticsList <a name="StatefulNodeAzureBootDiagnosticsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureBootDiagnosticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureBootDiagnostics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>[]

---


### StatefulNodeAzureBootDiagnosticsOutputReference <a name="StatefulNodeAzureBootDiagnosticsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl">resetStorageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetStorageUrl` <a name="resetStorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl"></a>

```typescript
public resetStorageUrl(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput">storageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl">storageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageUrlInput`<sup>Optional</sup> <a name="storageUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput"></a>

```typescript
public readonly storageUrlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageUrl`<sup>Required</sup> <a name="storageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl"></a>

```typescript
public readonly storageUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureBootDiagnostics | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a> | cdktf.IResolvable

---


### StatefulNodeAzureDataDiskList <a name="StatefulNodeAzureDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDataDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>[]

---


### StatefulNodeAzureDataDiskOutputReference <a name="StatefulNodeAzureDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureDataDisk | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a> | cdktf.IResolvable

---


### StatefulNodeAzureDeleteList <a name="StatefulNodeAzureDeleteList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDeleteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureDeleteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureDelete[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>[]

---


### StatefulNodeAzureDeleteOutputReference <a name="StatefulNodeAzureDeleteOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDeleteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours">resetDiskTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours">resetNetworkTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours">resetPublicIpTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours">resetSnapshotTtlInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskTtlInHours` <a name="resetDiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours"></a>

```typescript
public resetDiskTtlInHours(): void
```

##### `resetNetworkTtlInHours` <a name="resetNetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours"></a>

```typescript
public resetNetworkTtlInHours(): void
```

##### `resetPublicIpTtlInHours` <a name="resetPublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours"></a>

```typescript
public resetPublicIpTtlInHours(): void
```

##### `resetSnapshotTtlInHours` <a name="resetSnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours"></a>

```typescript
public resetSnapshotTtlInHours(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput">diskShouldDeallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput">diskTtlInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput">networkShouldDeallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput">networkTtlInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput">publicIpShouldDeallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput">publicIpTtlInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput">shouldTerminateVmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput">snapshotShouldDeallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput">snapshotTtlInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate">diskShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours">diskTtlInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate">networkShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours">networkTtlInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate">publicIpShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours">publicIpTtlInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm">shouldTerminateVm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate">snapshotShouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours">snapshotTtlInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskShouldDeallocateInput`<sup>Optional</sup> <a name="diskShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput"></a>

```typescript
public readonly diskShouldDeallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskTtlInHoursInput`<sup>Optional</sup> <a name="diskTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput"></a>

```typescript
public readonly diskTtlInHoursInput: number;
```

- *Type:* number

---

##### `networkShouldDeallocateInput`<sup>Optional</sup> <a name="networkShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput"></a>

```typescript
public readonly networkShouldDeallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkTtlInHoursInput`<sup>Optional</sup> <a name="networkTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput"></a>

```typescript
public readonly networkTtlInHoursInput: number;
```

- *Type:* number

---

##### `publicIpShouldDeallocateInput`<sup>Optional</sup> <a name="publicIpShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput"></a>

```typescript
public readonly publicIpShouldDeallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpTtlInHoursInput`<sup>Optional</sup> <a name="publicIpTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput"></a>

```typescript
public readonly publicIpTtlInHoursInput: number;
```

- *Type:* number

---

##### `shouldTerminateVmInput`<sup>Optional</sup> <a name="shouldTerminateVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput"></a>

```typescript
public readonly shouldTerminateVmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotShouldDeallocateInput`<sup>Optional</sup> <a name="snapshotShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput"></a>

```typescript
public readonly snapshotShouldDeallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotTtlInHoursInput`<sup>Optional</sup> <a name="snapshotTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput"></a>

```typescript
public readonly snapshotTtlInHoursInput: number;
```

- *Type:* number

---

##### `diskShouldDeallocate`<sup>Required</sup> <a name="diskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate"></a>

```typescript
public readonly diskShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskTtlInHours`<sup>Required</sup> <a name="diskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours"></a>

```typescript
public readonly diskTtlInHours: number;
```

- *Type:* number

---

##### `networkShouldDeallocate`<sup>Required</sup> <a name="networkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate"></a>

```typescript
public readonly networkShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkTtlInHours`<sup>Required</sup> <a name="networkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours"></a>

```typescript
public readonly networkTtlInHours: number;
```

- *Type:* number

---

##### `publicIpShouldDeallocate`<sup>Required</sup> <a name="publicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate"></a>

```typescript
public readonly publicIpShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpTtlInHours`<sup>Required</sup> <a name="publicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours"></a>

```typescript
public readonly publicIpTtlInHours: number;
```

- *Type:* number

---

##### `shouldTerminateVm`<sup>Required</sup> <a name="shouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm"></a>

```typescript
public readonly shouldTerminateVm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotShouldDeallocate`<sup>Required</sup> <a name="snapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate"></a>

```typescript
public readonly snapshotShouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotTtlInHours`<sup>Required</sup> <a name="snapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours"></a>

```typescript
public readonly snapshotTtlInHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureDelete | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a> | cdktf.IResolvable

---


### StatefulNodeAzureDetachDataDiskList <a name="StatefulNodeAzureDetachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDetachDataDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureDetachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureDetachDataDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>[]

---


### StatefulNodeAzureDetachDataDiskOutputReference <a name="StatefulNodeAzureDetachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours">resetTtlInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtlInHours` <a name="resetTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours"></a>

```typescript
public resetTtlInHours(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput">dataDiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">dataDiskResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput">shouldDeallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput">ttlInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName">dataDiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName">dataDiskResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate">shouldDeallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours">ttlInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataDiskNameInput`<sup>Optional</sup> <a name="dataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput"></a>

```typescript
public readonly dataDiskNameInput: string;
```

- *Type:* string

---

##### `dataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="dataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```typescript
public readonly dataDiskResourceGroupNameInput: string;
```

- *Type:* string

---

##### `shouldDeallocateInput`<sup>Optional</sup> <a name="shouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput"></a>

```typescript
public readonly shouldDeallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttlInHoursInput`<sup>Optional</sup> <a name="ttlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput"></a>

```typescript
public readonly ttlInHoursInput: number;
```

- *Type:* number

---

##### `dataDiskName`<sup>Required</sup> <a name="dataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName"></a>

```typescript
public readonly dataDiskName: string;
```

- *Type:* string

---

##### `dataDiskResourceGroupName`<sup>Required</sup> <a name="dataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```typescript
public readonly dataDiskResourceGroupName: string;
```

- *Type:* string

---

##### `shouldDeallocate`<sup>Required</sup> <a name="shouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate"></a>

```typescript
public readonly shouldDeallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttlInHours`<sup>Required</sup> <a name="ttlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours"></a>

```typescript
public readonly ttlInHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureDetachDataDisk | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a> | cdktf.IResolvable

---


### StatefulNodeAzureExtensionList <a name="StatefulNodeAzureExtensionList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>[]

---


### StatefulNodeAzureExtensionOutputReference <a name="StatefulNodeAzureExtensionOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings">resetPublicSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings"></a>

```typescript
public resetProtectedSettings(): void
```

##### `resetPublicSettings` <a name="resetPublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings"></a>

```typescript
public resetPublicSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput">minorVersionAutoUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput">publicSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade">minorVersionAutoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings">protectedSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings">publicSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `minorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="minorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```typescript
public readonly minorVersionAutoUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput"></a>

```typescript
public readonly protectedSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `publicSettingsInput`<sup>Optional</sup> <a name="publicSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput"></a>

```typescript
public readonly publicSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `minorVersionAutoUpgrade`<sup>Required</sup> <a name="minorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```typescript
public readonly minorVersionAutoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings"></a>

```typescript
public readonly protectedSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `publicSettings`<sup>Required</sup> <a name="publicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings"></a>

```typescript
public readonly publicSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureExtension | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a> | cdktf.IResolvable

---


### StatefulNodeAzureHealthOutputReference <a name="StatefulNodeAzureHealthOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureHealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration">resetUnhealthyDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetUnhealthyDuration` <a name="resetUnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration"></a>

```typescript
public resetUnhealthyDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput">healthCheckTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput">unhealthyDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes">healthCheckTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration">unhealthyDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: number;
```

- *Type:* number

---

##### `healthCheckTypesInput`<sup>Optional</sup> <a name="healthCheckTypesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput"></a>

```typescript
public readonly healthCheckTypesInput: string[];
```

- *Type:* string[]

---

##### `unhealthyDurationInput`<sup>Optional</sup> <a name="unhealthyDurationInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput"></a>

```typescript
public readonly unhealthyDurationInput: number;
```

- *Type:* number

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `healthCheckTypes`<sup>Required</sup> <a name="healthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes"></a>

```typescript
public readonly healthCheckTypes: string[];
```

- *Type:* string[]

---

##### `unhealthyDuration`<sup>Required</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration"></a>

```typescript
public readonly unhealthyDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---


### StatefulNodeAzureImageCustomImageList <a name="StatefulNodeAzureImageCustomImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageCustomImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureImageCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureImageCustomImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]

---


### StatefulNodeAzureImageCustomImageOutputReference <a name="StatefulNodeAzureImageCustomImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput">customImageResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName">customImageResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customImageResourceGroupNameInput`<sup>Optional</sup> <a name="customImageResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput"></a>

```typescript
public readonly customImageResourceGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `customImageResourceGroupName`<sup>Required</sup> <a name="customImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName"></a>

```typescript
public readonly customImageResourceGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureImageCustomImage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a> | cdktf.IResolvable

---


### StatefulNodeAzureImageGalleryList <a name="StatefulNodeAzureImageGalleryList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageGalleryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureImageGalleryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureImageGallery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]

---


### StatefulNodeAzureImageGalleryOutputReference <a name="StatefulNodeAzureImageGalleryOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput">galleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput">galleryResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName">galleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName">galleryResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `galleryNameInput`<sup>Optional</sup> <a name="galleryNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput"></a>

```typescript
public readonly galleryNameInput: string;
```

- *Type:* string

---

##### `galleryResourceGroupNameInput`<sup>Optional</sup> <a name="galleryResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput"></a>

```typescript
public readonly galleryResourceGroupNameInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

---

##### `galleryResourceGroupName`<sup>Required</sup> <a name="galleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName"></a>

```typescript
public readonly galleryResourceGroupName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureImageGallery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a> | cdktf.IResolvable

---


### StatefulNodeAzureImageMarketplaceImageList <a name="StatefulNodeAzureImageMarketplaceImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureImageMarketplaceImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureImageMarketplaceImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]

---


### StatefulNodeAzureImageMarketplaceImageOutputReference <a name="StatefulNodeAzureImageMarketplaceImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureImageMarketplaceImage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a> | cdktf.IResolvable

---


### StatefulNodeAzureImageOutputReference <a name="StatefulNodeAzureImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage">putCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery">putGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage">putMarketplaceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage">resetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery">resetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage">resetMarketplaceImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImage` <a name="putCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage"></a>

```typescript
public putCustomImage(value: IResolvable | StatefulNodeAzureImageCustomImage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]

---

##### `putGallery` <a name="putGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery"></a>

```typescript
public putGallery(value: IResolvable | StatefulNodeAzureImageGallery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]

---

##### `putMarketplaceImage` <a name="putMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage"></a>

```typescript
public putMarketplaceImage(value: IResolvable | StatefulNodeAzureImageMarketplaceImage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]

---

##### `resetCustomImage` <a name="resetCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage"></a>

```typescript
public resetCustomImage(): void
```

##### `resetGallery` <a name="resetGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery"></a>

```typescript
public resetGallery(): void
```

##### `resetMarketplaceImage` <a name="resetMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage"></a>

```typescript
public resetMarketplaceImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery">gallery</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage">marketplaceImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput">customImageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput">galleryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput">marketplaceImageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customImage`<sup>Required</sup> <a name="customImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage"></a>

```typescript
public readonly customImage: StatefulNodeAzureImageCustomImageList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a>

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery"></a>

```typescript
public readonly gallery: StatefulNodeAzureImageGalleryList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a>

---

##### `marketplaceImage`<sup>Required</sup> <a name="marketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage"></a>

```typescript
public readonly marketplaceImage: StatefulNodeAzureImageMarketplaceImageList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a>

---

##### `customImageInput`<sup>Optional</sup> <a name="customImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput"></a>

```typescript
public readonly customImageInput: IResolvable | StatefulNodeAzureImageCustomImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>[]

---

##### `galleryInput`<sup>Optional</sup> <a name="galleryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput"></a>

```typescript
public readonly galleryInput: IResolvable | StatefulNodeAzureImageGallery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>[]

---

##### `marketplaceImageInput`<sup>Optional</sup> <a name="marketplaceImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput"></a>

```typescript
public readonly marketplaceImageInput: IResolvable | StatefulNodeAzureImageMarketplaceImage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureImage;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---


### StatefulNodeAzureImportVmList <a name="StatefulNodeAzureImportVmList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImportVmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureImportVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureImportVm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>[]

---


### StatefulNodeAzureImportVmOutputReference <a name="StatefulNodeAzureImportVmOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureImportVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime">resetResourcesRetentionTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetResourcesRetentionTime` <a name="resetResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime"></a>

```typescript
public resetResourcesRetentionTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput">originalVmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput">resourcesRetentionTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName">originalVmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime">resourcesRetentionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `originalVmNameInput`<sup>Optional</sup> <a name="originalVmNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput"></a>

```typescript
public readonly originalVmNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `resourcesRetentionTimeInput`<sup>Optional</sup> <a name="resourcesRetentionTimeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput"></a>

```typescript
public readonly resourcesRetentionTimeInput: number;
```

- *Type:* number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `originalVmName`<sup>Required</sup> <a name="originalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName"></a>

```typescript
public readonly originalVmName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `resourcesRetentionTime`<sup>Required</sup> <a name="resourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime"></a>

```typescript
public readonly resourcesRetentionTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureImportVm | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a> | cdktf.IResolvable

---


### StatefulNodeAzureLoadBalancerList <a name="StatefulNodeAzureLoadBalancerList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>[]

---


### StatefulNodeAzureLoadBalancerOutputReference <a name="StatefulNodeAzureLoadBalancerOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku">resetSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSku` <a name="resetSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku"></a>

```typescript
public resetSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput">backendPoolNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames">backendPoolNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPoolNamesInput`<sup>Optional</sup> <a name="backendPoolNamesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```typescript
public readonly backendPoolNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `backendPoolNames`<sup>Required</sup> <a name="backendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames"></a>

```typescript
public readonly backendPoolNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureLoadBalancer | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a> | cdktf.IResolvable

---


### StatefulNodeAzureLoginOutputReference <a name="StatefulNodeAzureLoginOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureLoginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey">resetSshPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSshPublicKey` <a name="resetSshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey"></a>

```typescript
public resetSshPublicKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```typescript
public readonly sshPublicKeyInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureLogin;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---


### StatefulNodeAzureManagedServiceIdentitiesList <a name="StatefulNodeAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureManagedServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureManagedServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>[]

---


### StatefulNodeAzureManagedServiceIdentitiesOutputReference <a name="StatefulNodeAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureManagedServiceIdentities | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput">privateIpAddressVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion">privateIpAddressVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateIpAddressVersionInput`<sup>Optional</sup> <a name="privateIpAddressVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput"></a>

```typescript
public readonly privateIpAddressVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIpAddressVersion`<sup>Required</sup> <a name="privateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion"></a>

```typescript
public readonly privateIpAddressVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput">networkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkResourceGroupNameInput`<sup>Optional</sup> <a name="networkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput"></a>

```typescript
public readonly networkResourceGroupNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkNetworkInterfaceList <a name="StatefulNodeAzureNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureNetworkNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName">resetNetworkResourceGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkResourceGroupName` <a name="resetNetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName"></a>

```typescript
public resetNetworkResourceGroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput">networkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkResourceGroupNameInput`<sup>Optional</sup> <a name="networkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput"></a>

```typescript
public readonly networkResourceGroupNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkNetworkInterfaceOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations">putAdditionalIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups">putApplicationSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup">putNetworkSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps">putPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations">resetAdditionalIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups">resetApplicationSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding">resetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup">resetNetworkSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses">resetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku">resetPublicIpSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpConfigurations` <a name="putAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations"></a>

```typescript
public putAdditionalIpConfigurations(value: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]

---

##### `putApplicationSecurityGroups` <a name="putApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups"></a>

```typescript
public putApplicationSecurityGroups(value: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]

---

##### `putNetworkSecurityGroup` <a name="putNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup"></a>

```typescript
public putNetworkSecurityGroup(value: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]

---

##### `putPublicIps` <a name="putPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps"></a>

```typescript
public putPublicIps(value: IResolvable | StatefulNodeAzureNetworkNetworkInterfacePublicIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]

---

##### `resetAdditionalIpConfigurations` <a name="resetAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations"></a>

```typescript
public resetAdditionalIpConfigurations(): void
```

##### `resetApplicationSecurityGroups` <a name="resetApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups"></a>

```typescript
public resetApplicationSecurityGroups(): void
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetEnableIpForwarding` <a name="resetEnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```typescript
public resetEnableIpForwarding(): void
```

##### `resetNetworkSecurityGroup` <a name="resetNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup"></a>

```typescript
public resetNetworkSecurityGroup(): void
```

##### `resetPrivateIpAddresses` <a name="resetPrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses"></a>

```typescript
public resetPrivateIpAddresses(): void
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps"></a>

```typescript
public resetPublicIps(): void
```

##### `resetPublicIpSku` <a name="resetPublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku"></a>

```typescript
public resetPublicIpSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations">additionalIpConfigurations</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups">applicationSecurityGroups</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup">networkSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps">publicIps</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput">additionalIpConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput">applicationSecurityGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput">enableIpForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput">networkSecurityGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput">privateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput">publicIpsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput">publicIpSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput">subnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku">publicIpSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName">subnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalIpConfigurations`<sup>Required</sup> <a name="additionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations"></a>

```typescript
public readonly additionalIpConfigurations: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a>

---

##### `applicationSecurityGroups`<sup>Required</sup> <a name="applicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups"></a>

```typescript
public readonly applicationSecurityGroups: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a>

---

##### `networkSecurityGroup`<sup>Required</sup> <a name="networkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup"></a>

```typescript
public readonly networkSecurityGroup: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a>

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps"></a>

```typescript
public readonly publicIps: StatefulNodeAzureNetworkNetworkInterfacePublicIpsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a>

---

##### `additionalIpConfigurationsInput`<sup>Optional</sup> <a name="additionalIpConfigurationsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput"></a>

```typescript
public readonly additionalIpConfigurationsInput: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>[]

---

##### `applicationSecurityGroupsInput`<sup>Optional</sup> <a name="applicationSecurityGroupsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput"></a>

```typescript
public readonly applicationSecurityGroupsInput: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>[]

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwardingInput`<sup>Optional</sup> <a name="enableIpForwardingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```typescript
public readonly enableIpForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```typescript
public readonly isPrimaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkSecurityGroupInput`<sup>Optional</sup> <a name="networkSecurityGroupInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput"></a>

```typescript
public readonly networkSecurityGroupInput: IResolvable | StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>[]

---

##### `privateIpAddressesInput`<sup>Optional</sup> <a name="privateIpAddressesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput"></a>

```typescript
public readonly privateIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput"></a>

```typescript
public readonly publicIpsInput: IResolvable | StatefulNodeAzureNetworkNetworkInterfacePublicIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]

---

##### `publicIpSkuInput`<sup>Optional</sup> <a name="publicIpSkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput"></a>

```typescript
public readonly publicIpSkuInput: string;
```

- *Type:* string

---

##### `subnetNameInput`<sup>Optional</sup> <a name="subnetNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```typescript
public readonly subnetNameInput: string;
```

- *Type:* string

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwarding`<sup>Required</sup> <a name="enableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

---

##### `publicIpSku`<sup>Required</sup> <a name="publicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku"></a>

```typescript
public readonly publicIpSku: string;
```

- *Type:* string

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetworkNetworkInterface | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsList <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureNetworkNetworkInterfacePublicIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>[]

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput">networkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkResourceGroupNameInput`<sup>Optional</sup> <a name="networkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput"></a>

```typescript
public readonly networkResourceGroupNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetworkNetworkInterfacePublicIps | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a> | cdktf.IResolvable

---


### StatefulNodeAzureNetworkOutputReference <a name="StatefulNodeAzureNetworkOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | StatefulNodeAzureNetworkNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput">networkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName">networkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface"></a>

```typescript
public readonly networkInterface: StatefulNodeAzureNetworkNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a>

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | StatefulNodeAzureNetworkNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>[]

---

##### `networkResourceGroupNameInput`<sup>Optional</sup> <a name="networkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput"></a>

```typescript
public readonly networkResourceGroupNameInput: string;
```

- *Type:* string

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `networkResourceGroupName`<sup>Required</sup> <a name="networkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName"></a>

```typescript
public readonly networkResourceGroupName: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureNetwork;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---


### StatefulNodeAzureOsDiskOutputReference <a name="StatefulNodeAzureOsDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb">resetSizeGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGb` <a name="resetSizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb"></a>

```typescript
public resetSizeGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureOsDisk;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---


### StatefulNodeAzureSchedulingTaskList <a name="StatefulNodeAzureSchedulingTaskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSchedulingTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>[]

---


### StatefulNodeAzureSchedulingTaskOutputReference <a name="StatefulNodeAzureSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureSchedulingTask | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a> | cdktf.IResolvable

---


### StatefulNodeAzureSecretList <a name="StatefulNodeAzureSecretList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>[]

---


### StatefulNodeAzureSecretOutputReference <a name="StatefulNodeAzureSecretOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault">putSourceVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates">putVaultCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceVault` <a name="putSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault"></a>

```typescript
public putSourceVault(value: IResolvable | StatefulNodeAzureSecretSourceVault[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]

---

##### `putVaultCertificates` <a name="putVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates"></a>

```typescript
public putVaultCertificates(value: IResolvable | StatefulNodeAzureSecretVaultCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault">sourceVault</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates">vaultCertificates</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput">sourceVaultInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput">vaultCertificatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceVault`<sup>Required</sup> <a name="sourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault"></a>

```typescript
public readonly sourceVault: StatefulNodeAzureSecretSourceVaultList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a>

---

##### `vaultCertificates`<sup>Required</sup> <a name="vaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates"></a>

```typescript
public readonly vaultCertificates: StatefulNodeAzureSecretVaultCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a>

---

##### `sourceVaultInput`<sup>Optional</sup> <a name="sourceVaultInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput"></a>

```typescript
public readonly sourceVaultInput: IResolvable | StatefulNodeAzureSecretSourceVault[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]

---

##### `vaultCertificatesInput`<sup>Optional</sup> <a name="vaultCertificatesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput"></a>

```typescript
public readonly vaultCertificatesInput: IResolvable | StatefulNodeAzureSecretVaultCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureSecret | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a> | cdktf.IResolvable

---


### StatefulNodeAzureSecretSourceVaultList <a name="StatefulNodeAzureSecretSourceVaultList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureSecretSourceVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureSecretSourceVault[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>[]

---


### StatefulNodeAzureSecretSourceVaultOutputReference <a name="StatefulNodeAzureSecretSourceVaultOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureSecretSourceVault | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a> | cdktf.IResolvable

---


### StatefulNodeAzureSecretVaultCertificatesList <a name="StatefulNodeAzureSecretVaultCertificatesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureSecretVaultCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureSecretVaultCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>[]

---


### StatefulNodeAzureSecretVaultCertificatesOutputReference <a name="StatefulNodeAzureSecretVaultCertificatesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore">resetCertificateStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl">resetCertificateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateStore` <a name="resetCertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore"></a>

```typescript
public resetCertificateStore(): void
```

##### `resetCertificateUrl` <a name="resetCertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl"></a>

```typescript
public resetCertificateUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput">certificateStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput">certificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore">certificateStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl">certificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateStoreInput`<sup>Optional</sup> <a name="certificateStoreInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```typescript
public readonly certificateStoreInput: string;
```

- *Type:* string

---

##### `certificateUrlInput`<sup>Optional</sup> <a name="certificateUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```typescript
public readonly certificateUrlInput: string;
```

- *Type:* string

---

##### `certificateStore`<sup>Required</sup> <a name="certificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore"></a>

```typescript
public readonly certificateStore: string;
```

- *Type:* string

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureSecretVaultCertificates | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a> | cdktf.IResolvable

---


### StatefulNodeAzureSignalList <a name="StatefulNodeAzureSignalList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSignalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureSignalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureSignal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>[]

---


### StatefulNodeAzureSignalOutputReference <a name="StatefulNodeAzureSignalOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureSignalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureSignal | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a> | cdktf.IResolvable

---


### StatefulNodeAzureStrategyOutputReference <a name="StatefulNodeAzureStrategyOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot">putRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows">resetOptimizationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle">resetPreferredLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot">resetRevertToSpot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRevertToSpot` <a name="putRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot"></a>

```typescript
public putRevertToSpot(value: StatefulNodeAzureStrategyRevertToSpot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetOptimizationWindows` <a name="resetOptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows"></a>

```typescript
public resetOptimizationWindows(): void
```

##### `resetPreferredLifeCycle` <a name="resetPreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle"></a>

```typescript
public resetPreferredLifeCycle(): void
```

##### `resetRevertToSpot` <a name="resetRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot"></a>

```typescript
public resetRevertToSpot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot">revertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput">fallbackToOnDemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput">optimizationWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput">preferredLifeCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput">revertToSpotInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand">fallbackToOnDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows">optimizationWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle">preferredLifeCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revertToSpot`<sup>Required</sup> <a name="revertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot"></a>

```typescript
public readonly revertToSpot: StatefulNodeAzureStrategyRevertToSpotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a>

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `fallbackToOnDemandInput`<sup>Optional</sup> <a name="fallbackToOnDemandInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput"></a>

```typescript
public readonly fallbackToOnDemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optimizationWindowsInput`<sup>Optional</sup> <a name="optimizationWindowsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput"></a>

```typescript
public readonly optimizationWindowsInput: string[];
```

- *Type:* string[]

---

##### `preferredLifeCycleInput`<sup>Optional</sup> <a name="preferredLifeCycleInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput"></a>

```typescript
public readonly preferredLifeCycleInput: string;
```

- *Type:* string

---

##### `revertToSpotInput`<sup>Optional</sup> <a name="revertToSpotInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput"></a>

```typescript
public readonly revertToSpotInput: StatefulNodeAzureStrategyRevertToSpot;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `fallbackToOnDemand`<sup>Required</sup> <a name="fallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand"></a>

```typescript
public readonly fallbackToOnDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optimizationWindows`<sup>Required</sup> <a name="optimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows"></a>

```typescript
public readonly optimizationWindows: string[];
```

- *Type:* string[]

---

##### `preferredLifeCycle`<sup>Required</sup> <a name="preferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle"></a>

```typescript
public readonly preferredLifeCycle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---


### StatefulNodeAzureStrategyRevertToSpotOutputReference <a name="StatefulNodeAzureStrategyRevertToSpotOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput">performAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt">performAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performAtInput`<sup>Optional</sup> <a name="performAtInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput"></a>

```typescript
public readonly performAtInput: string;
```

- *Type:* string

---

##### `performAt`<sup>Required</sup> <a name="performAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt"></a>

```typescript
public readonly performAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureStrategyRevertToSpot;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---


### StatefulNodeAzureTagList <a name="StatefulNodeAzureTagList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>[]

---


### StatefulNodeAzureTagOutputReference <a name="StatefulNodeAzureTagOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureTag | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a> | cdktf.IResolvable

---


### StatefulNodeAzureUpdateStateList <a name="StatefulNodeAzureUpdateStateList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureUpdateStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get"></a>

```typescript
public get(index: number): StatefulNodeAzureUpdateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatefulNodeAzureUpdateState[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>[]

---


### StatefulNodeAzureUpdateStateOutputReference <a name="StatefulNodeAzureUpdateStateOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer"></a>

```typescript
import { statefulNodeAzure } from '@cdktf/provider-spotinst'

new statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StatefulNodeAzureUpdateState | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a> | cdktf.IResolvable

---


