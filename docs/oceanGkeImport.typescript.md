# `spotinst_ocean_gke_import`

Refer to the Terraform Registory for docs: [`spotinst_ocean_gke_import`](https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import).

# `oceanGkeImport` Submodule <a name="`oceanGkeImport` Submodule" id="@cdktf/provider-spotinst.oceanGkeImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeImport <a name="OceanGkeImport" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import spotinst_ocean_gke_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImport(scope: Construct, id: string, config: OceanGkeImportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig">OceanGkeImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig">OceanGkeImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices">putBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBackendServices">resetBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBlacklist">resetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetControllerClusterId">resetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetRootVolumeType">resetRootVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUseAsTemplateOnly">resetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler"></a>

```typescript
public putAutoscaler(value: OceanGkeImportAutoscaler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---

##### `putBackendServices` <a name="putBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices"></a>

```typescript
public putBackendServices(value: IResolvable | OceanGkeImportBackendServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask"></a>

```typescript
public putScheduledTask(value: IResolvable | OceanGkeImportScheduledTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: OceanGkeImportShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy"></a>

```typescript
public putStrategy(value: IResolvable | OceanGkeImportStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: OceanGkeImportUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetAutoscaler"></a>

```typescript
public resetAutoscaler(): void
```

##### `resetBackendServices` <a name="resetBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBackendServices"></a>

```typescript
public resetBackendServices(): void
```

##### `resetBlacklist` <a name="resetBlacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBlacklist"></a>

```typescript
public resetBlacklist(): void
```

##### `resetControllerClusterId` <a name="resetControllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetControllerClusterId"></a>

```typescript
public resetControllerClusterId(): void
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetDesiredCapacity"></a>

```typescript
public resetDesiredCapacity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetRootVolumeType` <a name="resetRootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetRootVolumeType"></a>

```typescript
public resetRootVolumeType(): void
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetScheduledTask"></a>

```typescript
public resetScheduledTask(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

##### `resetUseAsTemplateOnly` <a name="resetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUseAsTemplateOnly"></a>

```typescript
public resetUseAsTemplateOnly(): void
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetWhitelist"></a>

```typescript
public resetWhitelist(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanGkeImport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

oceanGkeImport.OceanGkeImport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

oceanGkeImport.OceanGkeImport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

oceanGkeImport.OceanGkeImport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

oceanGkeImport.OceanGkeImport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceanGkeImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanGkeImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanGkeImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference">OceanGkeImportAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServices">backendServices</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList">OceanGkeImportBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterControllerId">clusterControllerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList">OceanGkeImportScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference">OceanGkeImportShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList">OceanGkeImportStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference">OceanGkeImportUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServicesInput">backendServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklistInput">blacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterIdInput">controllerClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeTypeInput">rootVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategyInput">strategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnlyInput">useAsTemplateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelistInput">whitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklist">blacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterId">controllerClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeType">rootVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelist">whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanGkeImportAutoscalerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference">OceanGkeImportAutoscalerOutputReference</a>

---

##### `backendServices`<sup>Required</sup> <a name="backendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServices"></a>

```typescript
public readonly backendServices: OceanGkeImportBackendServicesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList">OceanGkeImportBackendServicesList</a>

---

##### `clusterControllerId`<sup>Required</sup> <a name="clusterControllerId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterControllerId"></a>

```typescript
public readonly clusterControllerId: string;
```

- *Type:* string

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: OceanGkeImportScheduledTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList">OceanGkeImportScheduledTaskList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: OceanGkeImportShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference">OceanGkeImportShieldedInstanceConfigOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategy"></a>

```typescript
public readonly strategy: OceanGkeImportStrategyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList">OceanGkeImportStrategyList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanGkeImportUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference">OceanGkeImportUpdatePolicyOutputReference</a>

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscalerInput"></a>

```typescript
public readonly autoscalerInput: OceanGkeImportAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---

##### `backendServicesInput`<sup>Optional</sup> <a name="backendServicesInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServicesInput"></a>

```typescript
public readonly backendServicesInput: IResolvable | OceanGkeImportBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]

---

##### `blacklistInput`<sup>Optional</sup> <a name="blacklistInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklistInput"></a>

```typescript
public readonly blacklistInput: string[];
```

- *Type:* string[]

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `controllerClusterIdInput`<sup>Optional</sup> <a name="controllerClusterIdInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterIdInput"></a>

```typescript
public readonly controllerClusterIdInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `rootVolumeTypeInput`<sup>Optional</sup> <a name="rootVolumeTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeTypeInput"></a>

```typescript
public readonly rootVolumeTypeInput: string;
```

- *Type:* string

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTaskInput"></a>

```typescript
public readonly scheduledTaskInput: IResolvable | OceanGkeImportScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: OceanGkeImportShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategyInput"></a>

```typescript
public readonly strategyInput: IResolvable | OceanGkeImportStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: OceanGkeImportUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---

##### `useAsTemplateOnlyInput`<sup>Optional</sup> <a name="useAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnlyInput"></a>

```typescript
public readonly useAsTemplateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelistInput"></a>

```typescript
public readonly whitelistInput: string[];
```

- *Type:* string[]

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklist"></a>

```typescript
public readonly blacklist: string[];
```

- *Type:* string[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterId"></a>

```typescript
public readonly controllerClusterId: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `rootVolumeType`<sup>Required</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeType"></a>

```typescript
public readonly rootVolumeType: string;
```

- *Type:* string

---

##### `useAsTemplateOnly`<sup>Required</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnly"></a>

```typescript
public readonly useAsTemplateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeImportAutoscaler <a name="OceanGkeImportAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportAutoscaler: oceanGkeImport.OceanGkeImportAutoscaler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#auto_headroom_percentage OceanGkeImport#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cooldown OceanGkeImport#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_automatic_and_manual_headroom OceanGkeImport#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isAutoConfig">isAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_auto_config OceanGkeImport#is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#auto_headroom_percentage OceanGkeImport#auto_headroom_percentage}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cooldown OceanGkeImport#cooldown}.

---

##### `down`<sup>Optional</sup> <a name="down" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.down"></a>

```typescript
public readonly down: OceanGkeImportAutoscalerDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#down OceanGkeImport#down}

---

##### `enableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```typescript
public readonly enableAutomaticAndManualHeadroom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_automatic_and_manual_headroom OceanGkeImport#enable_automatic_and_manual_headroom}.

---

##### `headroom`<sup>Optional</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.headroom"></a>

```typescript
public readonly headroom: OceanGkeImportAutoscalerHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#headroom OceanGkeImport#headroom}

---

##### `isAutoConfig`<sup>Optional</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isAutoConfig"></a>

```typescript
public readonly isAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_auto_config OceanGkeImport#is_auto_config}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanGkeImportAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#resource_limits OceanGkeImport#resource_limits}

---

### OceanGkeImportAutoscalerDown <a name="OceanGkeImportAutoscalerDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportAutoscalerDown: oceanGkeImport.OceanGkeImportAutoscalerDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#evaluation_periods OceanGkeImport#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_scale_down_percentage OceanGkeImport#max_scale_down_percentage}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#evaluation_periods OceanGkeImport#evaluation_periods}.

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_scale_down_percentage OceanGkeImport#max_scale_down_percentage}.

---

### OceanGkeImportAutoscalerHeadroom <a name="OceanGkeImportAutoscalerHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportAutoscalerHeadroom: oceanGkeImport.OceanGkeImportAutoscalerHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cpu_per_unit OceanGkeImport#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#gpu_per_unit OceanGkeImport#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#memory_per_unit OceanGkeImport#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#num_of_units OceanGkeImport#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cpu_per_unit OceanGkeImport#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#gpu_per_unit OceanGkeImport#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#memory_per_unit OceanGkeImport#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#num_of_units OceanGkeImport#num_of_units}.

---

### OceanGkeImportAutoscalerResourceLimits <a name="OceanGkeImportAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportAutoscalerResourceLimits: oceanGkeImport.OceanGkeImportAutoscalerResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}.

---

### OceanGkeImportBackendServices <a name="OceanGkeImportBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportBackendServices: oceanGkeImport.OceanGkeImportBackendServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#service_name OceanGkeImport#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.locationType">locationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#location_type OceanGkeImport#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.namedPorts">namedPorts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]</code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#scheme OceanGkeImport#scheme}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#service_name OceanGkeImport#service_name}.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#location_type OceanGkeImport#location_type}.

---

##### `namedPorts`<sup>Optional</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.namedPorts"></a>

```typescript
public readonly namedPorts: IResolvable | OceanGkeImportBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#named_ports OceanGkeImport#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#scheme OceanGkeImport#scheme}.

---

### OceanGkeImportBackendServicesNamedPorts <a name="OceanGkeImportBackendServicesNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportBackendServicesNamedPorts: oceanGkeImport.OceanGkeImportBackendServicesNamedPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#name OceanGkeImport#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.ports">ports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#ports OceanGkeImport#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#name OceanGkeImport#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#ports OceanGkeImport#ports}.

---

### OceanGkeImportConfig <a name="OceanGkeImportConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportConfig: oceanGkeImport.OceanGkeImportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.backendServices">backendServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.blacklist">blacklist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.controllerClusterId">controllerClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.rootVolumeType">rootVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.scheduledTask">scheduledTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.strategy">strategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.whitelist">whitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanGkeImportAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#autoscaler OceanGkeImport#autoscaler}

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.backendServices"></a>

```typescript
public readonly backendServices: IResolvable | OceanGkeImportBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#backend_services OceanGkeImport#backend_services}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.blacklist"></a>

```typescript
public readonly blacklist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}.

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.controllerClusterId"></a>

```typescript
public readonly controllerClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.rootVolumeType"></a>

```typescript
public readonly rootVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: IResolvable | OceanGkeImportScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#scheduled_task OceanGkeImport#scheduled_task}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: OceanGkeImportShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#shielded_instance_config OceanGkeImport#shielded_instance_config}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.strategy"></a>

```typescript
public readonly strategy: IResolvable | OceanGkeImportStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#strategy OceanGkeImport#strategy}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanGkeImportUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#update_policy OceanGkeImport#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.useAsTemplateOnly"></a>

```typescript
public readonly useAsTemplateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}.

---

### OceanGkeImportScheduledTask <a name="OceanGkeImportScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportScheduledTask: oceanGkeImport.OceanGkeImportScheduledTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.tasks">tasks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]</code> | tasks block. |

---

##### `shutdownHours`<sup>Optional</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.shutdownHours"></a>

```typescript
public readonly shutdownHours: OceanGkeImportScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#shutdown_hours OceanGkeImport#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.tasks"></a>

```typescript
public readonly tasks: IResolvable | OceanGkeImportScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#tasks OceanGkeImport#tasks}

---

### OceanGkeImportScheduledTaskShutdownHours <a name="OceanGkeImportScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportScheduledTaskShutdownHours: oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#time_windows OceanGkeImport#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#time_windows OceanGkeImport#time_windows}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

### OceanGkeImportScheduledTaskTasks <a name="OceanGkeImportScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportScheduledTaskTasks: oceanGkeImport.OceanGkeImportScheduledTaskTasks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cron_expression OceanGkeImport#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#task_type OceanGkeImport#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskParameters">taskParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | task_parameters block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cron_expression OceanGkeImport#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#task_type OceanGkeImport#task_type}.

---

##### `taskParameters`<sup>Optional</sup> <a name="taskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskParameters"></a>

```typescript
public readonly taskParameters: OceanGkeImportScheduledTaskTasksTaskParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

task_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#task_parameters OceanGkeImport#task_parameters}

---

### OceanGkeImportScheduledTaskTasksTaskParameters <a name="OceanGkeImportScheduledTaskTasksTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportScheduledTaskTasksTaskParameters: oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.property.clusterRoll">clusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | cluster_roll block. |

---

##### `clusterRoll`<sup>Optional</sup> <a name="clusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.property.clusterRoll"></a>

```typescript
public readonly clusterRoll: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#cluster_roll OceanGkeImport#cluster_roll}

---

### OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll <a name="OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportScheduledTaskTasksTaskParametersClusterRoll: oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#comment OceanGkeImport#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}. |

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#comment OceanGkeImport#comment}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}.

---

### OceanGkeImportShieldedInstanceConfig <a name="OceanGkeImportShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportShieldedInstanceConfig: oceanGkeImport.OceanGkeImportShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_integrity_monitoring OceanGkeImport#enable_integrity_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_secure_boot OceanGkeImport#enable_secure_boot}. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_integrity_monitoring OceanGkeImport#enable_integrity_monitoring}.

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#enable_secure_boot OceanGkeImport#enable_secure_boot}.

---

### OceanGkeImportStrategy <a name="OceanGkeImportStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportStrategy: oceanGkeImport.OceanGkeImportStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#draining_timeout OceanGkeImport#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#preemptible_percentage OceanGkeImport#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#provisioning_model OceanGkeImport#provisioning_model}. |

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#draining_timeout OceanGkeImport#draining_timeout}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#preemptible_percentage OceanGkeImport#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#provisioning_model OceanGkeImport#provisioning_model}.

---

### OceanGkeImportUpdatePolicy <a name="OceanGkeImportUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportUpdatePolicy: oceanGkeImport.OceanGkeImportUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#should_roll OceanGkeImport#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.conditionedRoll">conditionedRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#conditioned_roll OceanGkeImport#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#should_roll OceanGkeImport#should_roll}.

---

##### `conditionedRoll`<sup>Optional</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.conditionedRoll"></a>

```typescript
public readonly conditionedRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#conditioned_roll OceanGkeImport#conditioned_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanGkeImportUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#roll_config OceanGkeImport#roll_config}

---

### OceanGkeImportUpdatePolicyRollConfig <a name="OceanGkeImportUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

const oceanGkeImportUpdatePolicyRollConfig: oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.launchSpecIds">launchSpecIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#launch_spec_ids OceanGkeImport#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}.

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}.

---

##### `launchSpecIds`<sup>Optional</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.launchSpecIds"></a>

```typescript
public readonly launchSpecIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#launch_spec_ids OceanGkeImport#launch_spec_ids}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.150.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanGkeImportAutoscalerDownOutputReference <a name="OceanGkeImportAutoscalerDownOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetMaxScaleDownPercentage"></a>

```typescript
public resetMaxScaleDownPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentageInput"></a>

```typescript
public readonly maxScaleDownPercentageInput: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportAutoscalerDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---


### OceanGkeImportAutoscalerHeadroomOutputReference <a name="OceanGkeImportAutoscalerHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetNumOfUnits"></a>

```typescript
public resetNumOfUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportAutoscalerHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---


### OceanGkeImportAutoscalerOutputReference <a name="OceanGkeImportAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportAutoscalerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown">putDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom">putHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetDown">resetDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">resetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetHeadroom">resetHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsAutoConfig">resetIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDown` <a name="putDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown"></a>

```typescript
public putDown(value: OceanGkeImportAutoscalerDown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---

##### `putHeadroom` <a name="putHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom"></a>

```typescript
public putHeadroom(value: OceanGkeImportAutoscalerHeadroom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits"></a>

```typescript
public putResourceLimits(value: OceanGkeImportAutoscalerResourceLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```typescript
public resetAutoHeadroomPercentage(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDown` <a name="resetDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetDown"></a>

```typescript
public resetDown(): void
```

##### `resetEnableAutomaticAndManualHeadroom` <a name="resetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```typescript
public resetEnableAutomaticAndManualHeadroom(): void
```

##### `resetHeadroom` <a name="resetHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetHeadroom"></a>

```typescript
public resetHeadroom(): void
```

##### `resetIsAutoConfig` <a name="resetIsAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsAutoConfig"></a>

```typescript
public resetIsAutoConfig(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference">OceanGkeImportAutoscalerDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference">OceanGkeImportAutoscalerHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference">OceanGkeImportAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.downInput">downInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enableAutomaticAndManualHeadroomInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroomInput">headroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfigInput">isAutoConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfig">isAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `down`<sup>Required</sup> <a name="down" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.down"></a>

```typescript
public readonly down: OceanGkeImportAutoscalerDownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference">OceanGkeImportAutoscalerDownOutputReference</a>

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroom"></a>

```typescript
public readonly headroom: OceanGkeImportAutoscalerHeadroomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference">OceanGkeImportAutoscalerHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanGkeImportAutoscalerResourceLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference">OceanGkeImportAutoscalerResourceLimitsOutputReference</a>

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```typescript
public readonly autoHeadroomPercentageInput: number;
```

- *Type:* number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `downInput`<sup>Optional</sup> <a name="downInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.downInput"></a>

```typescript
public readonly downInput: OceanGkeImportAutoscalerDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---

##### `enableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```typescript
public readonly enableAutomaticAndManualHeadroomInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headroomInput`<sup>Optional</sup> <a name="headroomInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroomInput"></a>

```typescript
public readonly headroomInput: OceanGkeImportAutoscalerHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---

##### `isAutoConfigInput`<sup>Optional</sup> <a name="isAutoConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfigInput"></a>

```typescript
public readonly isAutoConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: OceanGkeImportAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `enableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```typescript
public readonly enableAutomaticAndManualHeadroom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoConfig`<sup>Required</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfig"></a>

```typescript
public readonly isAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---


### OceanGkeImportAutoscalerResourceLimitsOutputReference <a name="OceanGkeImportAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```typescript
public resetMaxMemoryGib(): void
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```typescript
public resetMaxVcpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```typescript
public readonly maxMemoryGibInput: number;
```

- *Type:* number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```typescript
public readonly maxVcpuInput: number;
```

- *Type:* number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---


### OceanGkeImportBackendServicesList <a name="OceanGkeImportBackendServicesList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportBackendServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get"></a>

```typescript
public get(index: number): OceanGkeImportBackendServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>[]

---


### OceanGkeImportBackendServicesNamedPortsList <a name="OceanGkeImportBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get"></a>

```typescript
public get(index: number): OceanGkeImportBackendServicesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]

---


### OceanGkeImportBackendServicesNamedPortsOutputReference <a name="OceanGkeImportBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportBackendServicesNamedPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>

---


### OceanGkeImportBackendServicesOutputReference <a name="OceanGkeImportBackendServicesOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportBackendServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts">putNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetNamedPorts">resetNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamedPorts` <a name="putNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts"></a>

```typescript
public putNamedPorts(value: IResolvable | OceanGkeImportBackendServicesNamedPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]

---

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetLocationType"></a>

```typescript
public resetLocationType(): void
```

##### `resetNamedPorts` <a name="resetNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetNamedPorts"></a>

```typescript
public resetNamedPorts(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList">OceanGkeImportBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPortsInput">namedPortsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPorts"></a>

```typescript
public readonly namedPorts: OceanGkeImportBackendServicesNamedPortsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList">OceanGkeImportBackendServicesNamedPortsList</a>

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `namedPortsInput`<sup>Optional</sup> <a name="namedPortsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPortsInput"></a>

```typescript
public readonly namedPortsInput: IResolvable | OceanGkeImportBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>[]

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportBackendServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>

---


### OceanGkeImportScheduledTaskList <a name="OceanGkeImportScheduledTaskList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get"></a>

```typescript
public get(index: number): OceanGkeImportScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>[]

---


### OceanGkeImportScheduledTaskOutputReference <a name="OceanGkeImportScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours">putShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetShutdownHours">resetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetTasks">resetTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShutdownHours` <a name="putShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours"></a>

```typescript
public putShutdownHours(value: OceanGkeImportScheduledTaskShutdownHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---

##### `putTasks` <a name="putTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks"></a>

```typescript
public putTasks(value: IResolvable | OceanGkeImportScheduledTaskTasks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]

---

##### `resetShutdownHours` <a name="resetShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetShutdownHours"></a>

```typescript
public resetShutdownHours(): void
```

##### `resetTasks` <a name="resetTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetTasks"></a>

```typescript
public resetTasks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference">OceanGkeImportScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList">OceanGkeImportScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHoursInput">shutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasksInput">tasksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shutdownHours`<sup>Required</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHours"></a>

```typescript
public readonly shutdownHours: OceanGkeImportScheduledTaskShutdownHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference">OceanGkeImportScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasks"></a>

```typescript
public readonly tasks: OceanGkeImportScheduledTaskTasksList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList">OceanGkeImportScheduledTaskTasksList</a>

---

##### `shutdownHoursInput`<sup>Optional</sup> <a name="shutdownHoursInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```typescript
public readonly shutdownHoursInput: OceanGkeImportScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasksInput"></a>

```typescript
public readonly tasksInput: IResolvable | OceanGkeImportScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportScheduledTask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>

---


### OceanGkeImportScheduledTaskShutdownHoursOutputReference <a name="OceanGkeImportScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```typescript
public readonly timeWindowsInput: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---


### OceanGkeImportScheduledTaskTasksList <a name="OceanGkeImportScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get"></a>

```typescript
public get(index: number): OceanGkeImportScheduledTaskTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>[]

---


### OceanGkeImportScheduledTaskTasksOutputReference <a name="OceanGkeImportScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters">putTaskParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resetTaskParameters">resetTaskParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskParameters` <a name="putTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters"></a>

```typescript
public putTaskParameters(value: OceanGkeImportScheduledTaskTasksTaskParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---

##### `resetTaskParameters` <a name="resetTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resetTaskParameters"></a>

```typescript
public resetTaskParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParameters">taskParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParametersInput">taskParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taskParameters`<sup>Required</sup> <a name="taskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParameters"></a>

```typescript
public readonly taskParameters: OceanGkeImportScheduledTaskTasksTaskParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersOutputReference</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskParametersInput`<sup>Optional</sup> <a name="taskParametersInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParametersInput"></a>

```typescript
public readonly taskParametersInput: OceanGkeImportScheduledTaskTasksTaskParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportScheduledTaskTasks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>

---


### OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference <a name="OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```typescript
public resetBatchMinHealthyPercentage(): void
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```typescript
public resetBatchSizePercentage(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetRespectPdb"></a>

```typescript
public resetRespectPdb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```typescript
public readonly batchMinHealthyPercentageInput: number;
```

- *Type:* number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdbInput"></a>

```typescript
public readonly respectPdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---


### OceanGkeImportScheduledTaskTasksTaskParametersOutputReference <a name="OceanGkeImportScheduledTaskTasksTaskParametersOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll">putClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resetClusterRoll">resetClusterRoll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterRoll` <a name="putClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll"></a>

```typescript
public putClusterRoll(value: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---

##### `resetClusterRoll` <a name="resetClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resetClusterRoll"></a>

```typescript
public resetClusterRoll(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRoll">clusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRollInput">clusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterRoll`<sup>Required</sup> <a name="clusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRoll"></a>

```typescript
public readonly clusterRoll: OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference</a>

---

##### `clusterRollInput`<sup>Optional</sup> <a name="clusterRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRollInput"></a>

```typescript
public readonly clusterRollInput: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportScheduledTaskTasksTaskParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---


### OceanGkeImportShieldedInstanceConfigOutputReference <a name="OceanGkeImportShieldedInstanceConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---


### OceanGkeImportStrategyList <a name="OceanGkeImportStrategyList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get"></a>

```typescript
public get(index: number): OceanGkeImportStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>[]

---


### OceanGkeImportStrategyOutputReference <a name="OceanGkeImportStrategyOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetPreemptiblePercentage"></a>

```typescript
public resetPreemptiblePercentage(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentageInput"></a>

```typescript
public readonly preemptiblePercentageInput: number;
```

- *Type:* number

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanGkeImportStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>

---


### OceanGkeImportUpdatePolicyOutputReference <a name="OceanGkeImportUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetConditionedRoll">resetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig"></a>

```typescript
public putRollConfig(value: OceanGkeImportUpdatePolicyRollConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---

##### `resetConditionedRoll` <a name="resetConditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetConditionedRoll"></a>

```typescript
public resetConditionedRoll(): void
```

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetRollConfig"></a>

```typescript
public resetRollConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference">OceanGkeImportUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRollInput">conditionedRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRoll">conditionedRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanGkeImportUpdatePolicyRollConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference">OceanGkeImportUpdatePolicyRollConfigOutputReference</a>

---

##### `conditionedRollInput`<sup>Optional</sup> <a name="conditionedRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```typescript
public readonly conditionedRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfigInput"></a>

```typescript
public readonly rollConfigInput: OceanGkeImportUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRollInput"></a>

```typescript
public readonly shouldRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionedRoll`<sup>Required</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRoll"></a>

```typescript
public readonly conditionedRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---


### OceanGkeImportUpdatePolicyRollConfigOutputReference <a name="OceanGkeImportUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer"></a>

```typescript
import { oceanGkeImport } from '@cdktf/provider-spotinst'

new oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">resetLaunchSpecIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```typescript
public resetBatchMinHealthyPercentage(): void
```

##### `resetLaunchSpecIds` <a name="resetLaunchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```typescript
public resetLaunchSpecIds(): void
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```typescript
public resetRespectPdb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">launchSpecIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIds">launchSpecIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```typescript
public readonly batchMinHealthyPercentageInput: number;
```

- *Type:* number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `launchSpecIdsInput`<sup>Optional</sup> <a name="launchSpecIdsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```typescript
public readonly launchSpecIdsInput: string[];
```

- *Type:* string[]

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```typescript
public readonly respectPdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `launchSpecIds`<sup>Required</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```typescript
public readonly launchSpecIds: string[];
```

- *Type:* string[]

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanGkeImportUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---



